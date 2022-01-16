import { useEffect, useState } from "react";
import {useQuery, useMutation, gql} from '@apollo/client';


const addBookQuery = gql`
    mutation addBook($name:String!, $genre:String!, $authorId:String!) {
      addBook(name:$name, genre:$genre, authorId:$authorId){
        name
        id
      }
    }
`

const fetchAuthors = gql`
    query FetchAuthors {
        authors{
            name
            nick
            id
            books{
                name
                genre
            } 
        }
    }
`


const musicQuery = gql`
       query musicQuery {
            users{
                id
                name
                
            }
        }
    `

const AddBook = (props) => {

    const [authors, setAuthors] = useState([])
    const fetchAuthorsData = useQuery(fetchAuthors)
    const [addBooks, {loading, data, error}] = useMutation(addBookQuery, {refetchQueries:[musicQuery,"musicQuery"]})
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthorId] = useState("")
                                                
   
    
    useEffect(()=>{
        console.log(data)
        // console.log(fetchAuthorsData.data)

        
    }, [fetchAuthorsData.data]) 



    const ListAuthors = ()=>{

        if(fetchAuthorsData.loading){
            return <option>loading...</option>
        }else {
            return fetchAuthorsData.data.authors.map(res=>{
                console.log(fetchAuthorsData.data, "Am  in Map")
                return <option value={res.id} key={res.id}>{res.name}</option>
            })
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(authorId)
        // addBooks({variables:{name:name, genre, authorId}})
    }


    return <> <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
            <input onChange={e=>setName(e.target.value)} placeholder="Book Title" className="form-control" />
        </fieldset>

        <fieldset className="form-group">
            <input onChange={e=>setGenre(e.target.value)} placeholder="Genre" className="form-control" />
        </fieldset>

         
        <fieldset className="form-group">
            <select onChange={e=>setAuthorId(e.target.value)} className="list-authors">
                <option>Select Author</option>
                {ListAuthors()}
            </select>
        </fieldset>
        <button type="submit">+</button>

     </form>
    </>
}

 
export default AddBook;