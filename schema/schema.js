const graphql = require('graphql');
const _ = require('lodash')
const {GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = graphql;
const Users = require('../model/user')
const Shop = require('../model/shop')
const Farm = require('../model/farm')
const Order = require('../model/order')
const Product = require('../model/product')
const History = require('../model/history')


// User Schema

const UserType = new GraphQLObjectType({
    name: "User",
    fields:() => {
        return {
            id: {type: GraphQLID},
            email: {type: GraphQLString},
            name: {type: GraphQLString},
            phone: {type: GraphQLString},
            password: {type: GraphQLString},
            deletedCount:{type:GraphQLInt},

            shops:{
                type:new GraphQLList(ShopType),
                resolve(parent, args){
                    return Shop.find({shopOwnerId:parent.id})
                }
            },

            farms:{
                type:new GraphQLList(FarmType),
                resolve(parent, args){
                    return Farm.find({farmOwnerId:parent.id})
                }
            },
        }

    }
})

// Shop schema
const ShopType = new GraphQLObjectType({
    name: "Shop",
    fields:() => {
        return {
            id: {type:GraphQLID},
            name: {type: GraphQLString},
            description:{type: GraphQLString},
            shopOwnerId: {type:GraphQLID},
            deletedCount:{type:GraphQLInt},
            user:{
                type:UserType,
                resolve(parent, args){
                    return Users.findOne({id:parent.shopOwnerId})
                }
            }
        }
    }
})

// Farm schema
const FarmType = new GraphQLObjectType({
    name: "Farm",
    fields:() => {
        return {
            id: {type:GraphQLID},
            name: {type: GraphQLString},
            description:{type: GraphQLString},
            farmOwnerId: {type:GraphQLID},
            deletedCount:{type:GraphQLInt},
            user:{
                type:UserType,
                resolve(parent, args){
                    return Users.findOne({id:parent.farmOwnerId})
                }
            }
        }
    }
})

// order schema
const OrderType = new GraphQLObjectType({
    name: "Order",
    fields:() => {
        return {
            id: {type:GraphQLID},
            productName: {type: GraphQLString},
            productDescription: {type: GraphQLString},
            productId:{type:GraphQLID},
            sellerId: {type:GraphQLID},
            buyerId: {type:GraphQLID},
            productPrice: {type:GraphQLInt},
            amountPaidIn: {type:GraphQLInt},
            hasBuyerReceivedDelivery: {type:GraphQLBoolean},
            hasSellerDelivered: {type:GraphQLBoolean},
            approved: {type:GraphQLBoolean},
            productLocation: {type:GraphQLString},
            paid: {type:GraphQLBoolean},
            refund: {type:GraphQLBoolean},
            spaid: {type:GraphQLBoolean},
            timeOfOrder: {type:GraphQLInt},
            deletedCount: {type:GraphQLInt},
            product:{
                type:ProductType,
                resolve(parent, args){
                    return Product.findOne({id:parent.productId})
                }
            },
            seller:{
                type:UserType,
                resolve(parent, args){
                    return Users.findOne({id:parent.sellerId})
                }
            },

            buyer:{
                type:UserType,
                resolve(parent, args){
                    return Users.findOne({id:parent.buyerId})
                }
            },
           
        }
    }
})

// product schema
const ProductType = new GraphQLObjectType({
    name: "Product",
    fields:() => {
        return {
            id: {type:GraphQLID},
            name: {type: GraphQLString},
            images:{type:new GraphQLList(GraphQLString)},
            description: {type: GraphQLString},
            sellerId: {type:GraphQLID},
            Price: {type:GraphQLInt},
            quantity: {type:GraphQLInt},
            brand: {type:GraphQLString},
            shipping: {type:GraphQLBoolean},
            deletedCount: {type:GraphQLInt},

            seller:{
                type:UserType,
                resolve(parent, args){
                    return Users.findOne({id:parent.sellerId})
                }
            },
        }
    }
})

// history schema
const HistoryType = new GraphQLObjectType({
    name: "History",
    fields:() => {
        return {
            id: {type:GraphQLID},
            name: {type: GraphQLString},
            description: {type: GraphQLString},
            sourceId: {type:GraphQLID},
            targetId: {type:GraphQLID},
            deletedCount: {type:GraphQLInt},
            date:{type:GraphQLString},
            source:{
                type:UserType,
                resolve(parent, args){
                    return Users.findOne({id:parent.targetId})
                }
            },

            product:{
                type:ProductType,
                resolve(parent, args){
                    return Users.findOne({id:parent.targetId})
                }
            },

            user:{
                type:UserType,
                resolve(parent, args){
                    return Users.findOne({id:parent.targetId})
                }
            },

            order:{
                type:OrderType,
                resolve(parent, args){
                    return Users.findOne({id:parent.targetId})
                }
            },

            farm:{
                type:FarmType,
                resolve(parent, args){
                    return Users.findOne({id:parent.targetId})
                }
            },
            
            shop:{
                type:ShopType,
                resolve(parent, args){
                    return Users.findOne({id:parent.targetId})
                }
            },
        }
    }
})


// Image Type

const ImageType = new GraphQLObjectType({
    name:"Images",
    fields:{
        url:{type:GraphQLString},
        images:{type:GraphQLString},


    }
})
 

const RootQueryType = new GraphQLObjectType({
    name : "RootQuery",
    fields : {
        // users Query
        user : {
            type:UserType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return Users.findOne({_id:args.id})
            }    
        },

        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return Users.find()
            }
        },
        // users query ends here

        // shop Query
        shop: {
            type: ShopType,
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Shop.findOne({_id:args.id})
            }
        },

        userShops: {
            type: new GraphQLList(ShopType),
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Shop.find({_id:args.id})
            }
        },

        shops: {
            type:new GraphQLList(ShopType),
            resolve(){
                return Shop.find()
            }
        },
        // shop query ends here

        // Farm Query
        farm: {
            type: FarmType,
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Farm.findOne({_id:args.id})
            }
        },

        
         userFarms: {
            type: new GraphQLList(FarmType),
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Farm.find({_id:args.id})
            }
        },

        farms: {
            type:new GraphQLList(FarmType),
            resolve(){
                return Farm.find()
            }
        },
        // farm query ends here

        // order Query
        order: {
            type: OrderType,
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Order.findOne({_id:args.id})
            }
        },

        userOrders: {
            type:new GraphQLList(OrderType),
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Order.find({_id:args.id})
            }
        },
        orders: {
            type:new GraphQLList(OrderType),
            resolve(){
                return Order.find()
            }
        },
        // order query ends here

        // product Query
        product: {
            type: ProductType,
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Product.findOne({_id:args.id})
            }
        },

        UserProducts: {
            type:new GraphQLList(ProductType),
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return Product.find({_id:args.id})
            }
        },

        products: {
            type:new GraphQLList(ProductType),
            resolve(){
                return Product.find()
            }
        },
        // order query ends here

        // history Query
        history: {
            type: HistoryType,
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return History.findOne({_id:args.id})
            }
        },

        userHistories: {
            type: new GraphQLList(HistoryType),
            args: {id:{type:GraphQLID}},
            resolve(parent, args){
                return History.find({_id:args.id})
            }
        },

        histories: {
            type:new GraphQLList(HistoryType),
            resolve(){
                return History.find()
            }
        },

        // history query ends here
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        // user Mutation
        addUser:{
            type:UserType,
            args:{id:{type:GraphQLID},
                 name:{type:GraphQLString},
                 phone:{type:GraphQLString},
                 email:{type:GraphQLString},
                 password:{type:GraphQLString},
                },
           async resolve(parent, args){
                console.log("I Was here")
                // let user = 
                let newUser = await new Users(args).save()
                console.log(newUser)
                return newUser
            }
        },
        removeUser: {
            type:UserType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return Users.remove({_id:args.id})
            }
        },

        updateUser: {
            type:UserType,
            args:{id:{type:GraphQLID},
            name:{type:GraphQLString},
            phone:{type:GraphQLString},
            email:{type:GraphQLString},},
            resolve(parent, args){
                const updatedUser = Users.findOneAndUpdate({_id:args.id},
                    args,{new:true})
                return updatedUser
            }
        },
        // End of User mutation

        // shop Mutation
        addShop:{
            type:ShopType,
            args:{id:{type:GraphQLID},
                 name:{type:GraphQLString},
                 description:{type:GraphQLString},
                 shopOwnerId:{type:GraphQLString},
                },
           async resolve(parent, args){
                console.log("I Was here")
                // let user = 
                // let newUser = user.save()
                // console.log("I Was here")
                return new Shop(args).save()
            }
        },

        removeShop: {
            type:ShopType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                return Shop.remove({_id:args.id})
            }
        },

        updateShop: {
            type:ShopType,
            args:{id:{type:GraphQLID},
            name:{type:GraphQLString},
            description:{type:GraphQLString},
            shopOwnerId:{type:GraphQLString},},
            resolve(parent, args){
                const updatedShop = Shop.findOneAndUpdate({_id:args.id},
                    args,{new:true})
                return updatedShop
            }
        },
        // end of shop Mutation

        // Farm Mutation
        addFarm:{
            type:FarmType,
            args:{id:{type:GraphQLID},
                 name:{type:GraphQLString},
                 description:{type:GraphQLString},
                 farmOwnerId:{type:GraphQLString},
                },
           async resolve(parent, args){
                console.log("I Was here")
                // let user = 
                // let newUser = user.save()
                // console.log("I Was here")
                return new Farm(args).save()
            }
        },

        removeFarm: {
            type:FarmType,
            args:{id:{type:GraphQLID}},
            async resolve(parent, args){
                const removedFarm = await Farm.remove({_id:args.id})
                console.log(removedFarm)
                return removedFarm
            }
        },

        updateFarm: {
            type:FarmType,
            args:{id:{type:GraphQLID},
            name:{type:GraphQLString},
            description:{type:GraphQLString},
            farmOwnerId:{type:GraphQLString},},
            resolve(parent, args){
                const updatedFarm = Farm.findOneAndUpdate({_id:args.id},
                    args,{new:true})
                return updatedFarm
            }
        },
        // end of farm Mutation        

        // Order Mutation
        addOrder:{
            type:OrderType,
            args:{id:{type:GraphQLID},
                 productName:{type:GraphQLString},
                 productDescription:{type:GraphQLString},
                 sellerId:{type:GraphQLID},
                 buyerId:{type:GraphQLID},
                 productPrice:{type:GraphQLInt},
                 amountpaidIn:{type:GraphQLInt},
                 hasBuyerReceivedDelivery:{type:GraphQLBoolean},
                 hasSellerDelivered:{type:GraphQLBoolean},
                 approved:{type:GraphQLBoolean},
                 productLocation:{type:GraphQLString},
                 paid:{type:GraphQLBoolean},
                 refund:{type:GraphQLBoolean},
                 spaid:{type:GraphQLBoolean},
                },

           async resolve(parent, args){
                console.log("I Was here")
                // let user = 
                // let newUser = user.save()
                console.log(args)
                return new Order(args).save()
            }
        },

        removeOrder: {
            type:OrderType,
            args:{id:{type:GraphQLID}},
            async resolve(parent, args){
                const removedOrder = await Order.remove({_id:args.id})
                console.log(removedOrder)
                return removedOrder
            }
        },

        updateOrder: {
            type:OrderType,
            args:{id:{type:GraphQLID},
                productName:{type:GraphQLString},
                productDescription:{type:GraphQLString},
                sellerId:{type:GraphQLID},
                buyerId:{type:GraphQLID},
                productPrice:{type:GraphQLInt},
                amountpaidIn:{type:GraphQLInt},
                hasBuyerReceivedDelivery:{type:GraphQLBoolean},
                hasSellerDelivered:{type:GraphQLBoolean},
                approved:{type:GraphQLBoolean},
                productLocation:{type:GraphQLString},
                refund:{type:GraphQLBoolean},
                spaid:{type:GraphQLBoolean},
                paid:{type:GraphQLBoolean},},

            resolve(parent, args){
                const updatedOrder = Order.findOneAndUpdate({_id:args.id},
                    args,
                    {new:true})
                return updatedOrder
            }
        },
        // end of order Mutation    
        
         // product Mutation
         addProduct:{
            type:ProductType,
            args:{id:{type:GraphQLID},
            name: {type: GraphQLString},
            description: {type: GraphQLString},
            sellerId: {type:GraphQLID},
            images:{type:new GraphQLList(GraphQLString)},
            Price: {type:GraphQLInt},
            quantity: {type:GraphQLInt},
            brand: {type:GraphQLString},
            shipping: {type:GraphQLBoolean},
            },

           async resolve(parent, args){
                console.log("I Was here")
                // let user = 
                // let newUser = user.save()
                console.log(args)
                return new Product(args).save()
            }
        },

        removeProduct: {
            type:ProductType,
            args:{id:{type:GraphQLID}},
            async resolve(parent, args){
                const removedProduct = await Product.remove({_id:args.id})
                console.log(removedProduct)
                return removedProduct
            }
        },

        updatePproduct: {
            type:ProductType,
            args:{id:{type:GraphQLID},
            images:{type:new GraphQLList(GraphQLString)},
            id: {type:GraphQLID},
            name: {type: GraphQLString},
            description: {type: GraphQLString},
            sellerId: {type:GraphQLID},
            Price: {type:GraphQLInt},
            quantity: {type:GraphQLInt},
            brand: {type:GraphQLString},
            shipping: {type:GraphQLBoolean},
        },

            resolve(parent, args){
                const updatedProduct = Product.findOneAndUpdate({_id:args.id},
                    args,
                    {new:true})
                return updatedProduct
            }
        },
        // end of product Mutation       

        // history Mutation
        addHistory:{
            type:HistoryType,
            args:{id:{type:GraphQLID},
            name: {type: GraphQLString},
            description: {type: GraphQLString},
            sourceId: {type:GraphQLID},
            targetId: {type:GraphQLID},
            },

           async resolve(parent, args){
                console.log("I Was here")
                // let user = 
                // let newUser = user.save()
                console.log(args)
                return new History(args).save()
            }
        },

        removeHistory: {
            type:HistoryType,
            args:{id:{type:GraphQLID}},
            async resolve(parent, args){
                const removedHistory = await History.remove({_id:args.id})
                console.log(removedHistory)
                return removedHistory
            }
        },

        updateHistory: {
            type:ProductType,
            args:{id:{type:GraphQLID},
            name: {type: GraphQLString},
            description: {type: GraphQLString},
            sourceId: {type:GraphQLID},
            targetId: {type:GraphQLID},
        },

        resolve(parent, args){
                const updatedHistory = History.findOneAndUpdate({_id:args.id},
                    args,
                    {new:true})
                return updatedHistory
            }
        },
        // end of history Mutation   
        
        // Image upload

        uploadImage:{
            type:ImageType,
            args:{images:GraphQLObjectType},

            resolve(parent, args){
                console.log(args.images)
                return {url:"what the heck"}
            }
        }

    }
})


module.exports = new GraphQLSchema({
    query:RootQueryType,
    mutation:Mutation
})

