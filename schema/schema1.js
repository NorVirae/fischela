const graphql = require('graphql');
const _ = require('lodash')
const {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = graphql;
const Author = require("../model/authors")
const Book = require("../model/books")


const books = [
    {name:"Lucid Traveller", genre:"SciFi", id:"1", authorNick:"virus"},
    {name:"Univasalis", genre:"Education", id:"2", authorNick:"virus"},
    {name:"the dragon fall", genre:"horror", id:"3", authorNick:"alby"},
    {name:"things fall apart", genre:"dane", id:"4", authorNick:"willy"},
    {name:"Elumma: Goddess of Hoax", genre:"horror", id:"5", authorNick:"virus"},
    {name:"The Thunder God", genre:"dane", id:"6", authorNick:"willy"},
    {name:"Doh Abanna", genre:"horror", id:"7", authorNick:"alby"},
]

const authors = [
    {name:"Norbert Frank", age:24, id:"1", nick:"virus", bookId:"1"},
    {name:"Williams Sheakespeare", age:234, id:"2", nick:"willy", bookId:"2"},
    {name:"Albert Einstein", age:190, id:"3", nick:"alby", bookId:"3"},
]

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: ()=> (
        {id : {type:GraphQLID},
        name: {type:GraphQLString},
        genre: {type:GraphQLString},
        authorId: {type:GraphQLString},
        author: {
            type:AuthorType,
            async resolve(parent) {
                return await Author.findById(parent.authorId)
            }
        }

        
    })

})


const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: ()=> (
        {id : {type:GraphQLID},
        age: {type:GraphQLInt},
        name: {type:GraphQLString},
        nick: {type:GraphQLString},
        books: {
            type:new GraphQLList(BookType),
            async resolve(parent, args) {
                const ownBooks = await Book.find({authorId:parent.id})
             
                return ownBooks
            }
        }
    })

})


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type:BookType,
            args: {id:{type:new GraphQLNonNull(GraphQLID)}},
            async resolve(parent, args){
                const foundBooks = await Book.findOne({_id:args.id})
                return foundBooks
               
            }
        },

        author: {
            type:AuthorType,
            args: {id: {type:new GraphQLNonNull(GraphQLID)}},
            async resolve(parent, args){
                const results = await Author.findOne({_id:args.id})
                return results
            }
        },

        books: {
            type: new GraphQLList(BookType),
            resolve(){
                return Book.find()
            }
        },

        authors: {
            type: new GraphQLList(AuthorType),
            resolve(){
                return Author.find()
            }
        },

        deleteAllBooks: {
            type: new GraphQLList(BookType),
            async resolve(){
                const deletedBooks = await Book.remove()
                return deletedBooks
            }
        }
    }

})


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addAuthor: {
            type:AuthorType,
            args:{name:{type:new GraphQLNonNull(GraphQLString)},
                 age:{ type:new GraphQLNonNull(GraphQLInt)},
                 nick:{type:new GraphQLNonNull(GraphQLString)}
            },

            resolve(parent, args){
                const author = new Author({
                    name:args.name,
                    age:args.age,
                    nick: args.nick
                    })
                
                const newAuthor = author.save()


                return newAuthor
            }

        },

        addBook: {
            type:BookType,
            args:{name:{type:new GraphQLNonNull(GraphQLString)},
                 genre:{ type:new GraphQLNonNull(GraphQLString)},
                 authorId: {type:new GraphQLNonNull(GraphQLString)}
            },

            async resolve(parent, args){
                console.log("I am here")
                const book = new Book({
                    name:args.name,
                    genre:args.genre,
                    authorId:args.authorId
                    })

                const newBook = await book.save()

                return newBook

            }

        },

        
    }

})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})

