const Order = require("../model/order")
const slugify = require("slugify");
const product = require("../model/product");

exports.CreateOrder = async (req, res) => {
   //
//    name
// ProductId
// BuyerId
// description
// price
// color
// brand
// qty
// location
// expiry
// timeOfOrder
console.log("THIS IS THE HEADER FOR CREATE ORDER", req.headers)
   console.log("ZE BODY",req.body)
   let productL = req.body.neworder.length;
   let orderList = req.body.neworder
   let successp = []
   console.log(orderList)
   try{

   for (let count=0; count<productL; count++){
      successp.push(await new Order({name:orderList[count].name,
                  productId:orderList._id,
               // BuyerId:orderList[count].BuyerId,
               description:orderList[count].description,
               price:orderList[count].price,
               amountpaid:orderList[count].newQty * orderList[count].price,
               color:orderList[count].color,
               brand:orderList[count].brand,
               qty:orderList[count].newQty,
               location:orderList[count].location,}
               // expiry:orderList[count].expiry
            ).save())
      console.log(successp)}
      res.send({successp})
   
   }
      
      catch(err){
         // console.log(err)
         console.log(err)
         res.send("unable to create product")
      }
   

//    req.body.slug = slugify(req.body.name)
   // try{res.json(await new Order(req.body).save())}
   // catch(err){
   //    console.log(err)
   //    res.status(400).send("Unable to create Product")
   // }
}

exports.ReadOrder = async (req, res) => {
    //
    console.log(req.params)
    const prod = await Order.findOne({slug:req.params.id})
    console.log(prod)
   res.json(prod) 
 }
 
 exports.listOrder = async (req, res) => {
    //
    res.json(await Order.find().populate('User').populate('Product').exec())
 }
 exports.UpdateOrder = async (req, res) => {
   //
   let successp = []
   try{

      console.log("THIS IS FROM THE PRODUCT UPDATE",req.body)
      prods = req.body

      

         for (let count=0; count<prods.length; count++){
            successp.push(await Order.findOneAndUpdate({_id:prods[count]._id},
               {paid:true}, {new:true}))
            console.log(successp)}

            res.send({successp})
         
         }
            
            
      
      catch (err){
         console.log(err)
      }
   
}

exports.DeleteOrder = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE PRODUCT", req.body)
      const deleted = await Order.deleteOne({slug:req.body.slug})
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}

exports.DeleteOrder = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE PRODUCT", req.body)
      const deleted = await Order.deleteOne({slug:req.body.slug})
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}

exports.DeleteAllOrders = async (req, res) => {
   //
   try{
      console.log("THIS IS DELETE PRODUCT", req.body)
      const deleted = await Order.remove()
      console.log("THIS IS THE DELETED FILE", deleted)
      res.json(deleted)

   }
   catch(err){
      res.status(400).send(err)
   }
}