import {gql} from "@apollo/client";



export const fetchUsersQuery = gql`
        query {
            users {
                name
                phone
                email
                id
            }
        }
    `


export const fetchAUserQuery = gql`
        query ($id:ID!) {
            user(id:$id) {
                name
                phone
                email
                id
            }
        }
    `


export const createUserQuery = gql`
            mutation addUser($name:String!, $phone:String, $password:String, $email:String){
                addUser(name:$name, phone:$phone, password:$password, email:$email){
                name
                email
                phone
                }
            }
`

export const productCreateQuery = gql`
            mutation addProduct($name:String, $description:String, $sellerId:ID, $images:[ID], $price:Int, $quantity:Int,  $brand:String, $shipping:Boolean ) {
                addProduct(name:$name,  description:$description,
                            sellerId:$sellerId, images:$images, price: $price, quantity:$quantity,
                            brand:$brand, shipping:$shipping){
                name
                sellerId
                brand
                id
                images
                price
                description
                shipping
                quantity
                }
            }
`

export const productUpdateQuery = gql`
            mutation updateProduct($id:ID, $name:String, $description:String, $sellerId:ID, $images:[ID], $price:Int, $quantity:Int,  $brand:String, $shipping:Boolean ) {
                updateProduct(id:$id, name:$name,  description:$description,
                            sellerId:$sellerId, images:$images, price: $price, quantity:$quantity,
                            brand:$brand, shipping:$shipping){
                name
                sellerId
                brand
                id
                images
                price
                description
                shipping
                quantity
                }
            }
`

export const listProductQuery =  gql`
            query {
                products{
                    id
                   name
                   description
                   images
                   price
                   id
                }
            }
`

export const fetchOneProductQuery = gql`
            query product($id:ID){
                product(id:$id){
                    name
                    id
                    description
                    price
                }
            }
`

export const createShopQuery = gql`
        mutation addShop($name:String, $description:String, $shopOwnerId:ID) {
            addShop(name:$name, description:$description, shopOwnerId:$shopOwnerId){
            name
            description
            shopOwnerId
            }
        }
`

export const updateShopQuery = gql`
        mutation updateShop($id:ID, $name:String, $description:String, $shopOwnerId:ID) {
            updateShop(id:$id, name:$name, description:$description, shopOwnerId:$shopOwnerId){
                name
                description
                shopOwnerId
            }
        }
`

export const listShopQuery = gql`
        query {
            shops{
                id
                name
                description
                shopOwnerId
            }
        }
`

export const listOneShopQuery = gql`
        query shop($id:ID) {
            shop(id:$id){
                id
                name
                description
                shopOwnerId
            }
        }
`

export const createFarmQuery = gql`
        mutation addFarm($name:String, $description:String, $farmOwnerId:ID) {
            addFarm(name:$name, description:$description, farmOwnerId:$farmOwnerId){
            name
            description
            farmOwnerId
            }
        }
`

export const updateFarmQuery = gql`
        mutation updateFarm($id:ID, $name:String, $description:String, $farmOwnerId:ID) {
            updateFarm(id:$id, name:$name, description:$description, farmOwnerId:$farmOwnerId){
                name
                description
                farmOwnerId
            }
        }
`

export const listFarmQuery = gql`
        query {
            farms{
                id
                name
                description
                farmOwnerId
            }
        }
`

export const listOneFarmQuery = gql`
        query farm($id:ID) {
            farm(id:$id){
                id
                name
                description
                farmOwnerId
            }
        }
`

export const createOrderQuery = gql`
        mutation addOrder($productName:String, $productDescription:String, $sellerId:ID, $buyerId:ID, $productPrice:Int, $amountpaidIn:Int, $hasBuyerReceivedDelivery:Boolean, $hasSellerDelivered:Boolean, $approved:Boolean, $productLocation:String, $paid:Boolean, $refund:Boolean, $spaid:Boolean ) {
            addOrder(productName:$productName, productDescription:$productDescription, sellerId:$sellerId, buyerId:$buyerId, productPrice:$productPrice, amountpaidIn:$amountpaidIn, hasBuyerReceivedDelivery:$hasBuyerReceivedDelivery, hasSellerDelivered:$hasSellerDelivered, approved:$approved, productLocation:$productLocation, paid:$paid, refund:$refund, spaid:$spaid){
            productName
            productDescription
            sellerId
            }
        }
`

export const updateOrderQuery = gql`
        mutation updateOrder($id:ID, $productName:String, $productDescription:String, $sellerId:ID, $buyerId:ID, $productPrice:Int, $amountpaidIn:Int, $hasBuyerReceivedDelivery:Boolean, $hasSellerDelivered:Boolean, $approved:Boolean, $productLocation:String, $paid:Boolean, $refund:Boolean, $spaid:Boolean ) {
            updateOrder(id:$id, productName:$productName, productDescription:$productDescription, sellerId:$sellerId, buyerId:$buyerId, productPrice:$productPrice, amountpaidIn:$amountpaidIn, hasBuyerReceivedDelivery:$hasBuyerReceivedDelivery, hasSellerDelivered:$hasSellerDelivered, approved:$approved, productLocation:$productLocation, paid:$paid, refund:$refund, spaid:$spaid){
            productName
            productDescription
            sellerId
            }
        }
`


export const createHistoryQuery = (type) =>{
    
    return( gql`
        mutation addHistory($name:String, $description:String, $sourceId:ID, $targetId:ID){
            addHistory(name:$name, description:$description, sourceId:$sourceId, targetId:$targetId){
                name
                description
                sourceId
                targetId
                ${type}
            }
        }
`)
    }


    export const listUserHistoryQueryType = (type) => {
    
        return( gql`
            mutation userHistories($id:ID){
                userHistories(id:$id){
                    name
                    description
                    sourceId
                    targetId
                    ${type}
                }
            }
    `)
        }
    
    export const listUserHistoryQuery =gql`
                query{ histories{
                        name
                        description
                        sourceId
                        targetId
                       
                    }

                }
                
        `