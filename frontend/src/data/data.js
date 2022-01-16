export const hotProducts = () => {
    return [{id:0, name:'Dell Latitude Laptop', images:[{public_id:"", url:""}], category:18, subcategory:128, price:"60000", rating:5, description:'core i5, 33 inches screen, 500GB HDD,'},
    {id:1, name:'Bread and Egg', category:13, subcategory:123, price:"550", rating:4, description:'2 eggs and one yale bread'},
  {id:2, name:"Versace Trouser", category:14, subcategory:124, price:"2500", rating:5, description:"Black slim fit"},
    {id:3, name:"surrati perfume", category:15, subcategory:125, price:"5000", rating:3, description:"apple smell oud"},
  {id:4, name:"Rice and Chicken", category:16, subcategory:126, price:"1700", rating:1, description:"Rice with salad and roasted chicken"},
  {id:5, name:"Chukason", category:16, subcategory:126, price:"50000", rating:1, description:"he likes eating fish"},
  
  {id:6, name:"Bole", price:"1200", category:17, subcategory:127, rating:2, description:"Roasted plantain mixed with yam and potato"}]
}


export const hotFarms = () => {

  return [{id:0, farmOwnerId:0, name:'Apple Farm', images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2016/11/30/15/00/apples-1872997_960_720.jpg"}], category:18, subcategory:128, price:"60000", rating:5, description:'core i5, 33 inches screen, 500GB HDD,'},
  {id:1, farmOwnerId:0, name:'Chicken Farm',  images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2017/07/20/15/21/chickens-2522623_960_720.jpg"}], category:13, subcategory:123, price:"550", rating:4, description:'2 eggs and one yale bread'},
{id:2, farmOwnerId:0, name:"Sheep Farm", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2017/01/16/19/54/ireland-1985088_960_720.jpg"}], category:14, subcategory:124, price:"2500", rating:5, description:"Black slim fit"},
  {id:3, farmOwnerId:1, name:"Corn Farm", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2014/09/09/19/07/corn-field-440338_960_720.jpg"}], category:15, subcategory:125, price:"5000", rating:3, description:"apple smell oud"},
{id:4, farmOwnerId:1, name:"Dog Farm", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2016/10/31/14/55/rottweiler-1785760_960_720.jpg"}], category:16, subcategory:126, price:"1700", rating:1, description:"Rice with salad and roasted chicken"},
{id:5, farmOwnerId:1, name:"Pig Farm", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2018/05/09/22/44/piglet-3386356_960_720.jpg"}], category:16, subcategory:126, price:"50000", rating:1, description:"he likes eating fish"},

{id:6, farmOwnerId:0, name:"Grape Farm", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2017/08/18/19/48/grapes-2656259_960_720.jpg"}], price:"1200", category:17, subcategory:127, rating:2, description:"Roasted plantain mixed with yam and potato"}]
}


export const hotShops = () => {
    return [{id:0, shopOwnerId:0, name:'Uchendu Mall', images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_960_720.jpg"}], description:'core i5, 33 inches screen, 500GB HDD,'},
    {id:1, shopOwnerId:0, name:'Ada Ugo SuperMarket',  images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913_960_720.jpg"}], description:'2 eggs and one yale bread'},
  {id:2, shopOwnerId:2, name:"Catholic Book Store", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2016/01/27/04/32/books-1163695_960_720.jpg"}], description:"Black slim fit"},
    {id:3, shopOwnerId:3, name:"Gigs Chills and Drinks", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2018/01/25/08/14/beverages-3105631_960_720.jpg"}], description:"apple smell oud"},
  {id:4, shopOwnerId:0, name:"Honey Farm", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2016/11/23/15/14/jars-1853439_960_720.jpg"}], description:"Rice with salad and roasted chicken"},
  {id:5, shopOwnerId:2, name:"Jay Mechanic Shop", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2014/06/04/16/36/man-362150_960_720.jpg"}], description:"he likes eating fish"},
  {id:6, shopOwnerId:1, name:"Rita Clothe Spree", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_960_720.jpg"}], description:"Roasted plantain mixed with yam and potato"}]
}


export const deals = () => {
    return [{id:0, farmId:0, name:'50 Bags of rice', images:[{public_id:"", url:"", src:"https://media.istockphoto.com/photos/boiled-red-crawfishon-close-up-top-of-view-picture-id1268431060"}], category:18, subcategory:128, price:"600000", rating:5, description:'core i5, 33 inches screen, 500GB HDD,'},
    {id:1, farmId:0, name:'20 bags of crayfish', images:[{public_id:"", url:"", src:"https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}], category:13, subcategory:123, price:"500050", rating:4, description:'2 eggs and one yale bread'},
    {id:2, farmId:3, name:"2000 catfish", images:[{public_id:"", url:"", src:"https://media.istockphoto.com/photos/boiled-red-crawfishon-close-up-top-of-view-picture-id1268431060"}], category:14, subcategory:124, price:"250000", rating:5, description:"Black slim fit"},
    {id:3, farmId:0, name:"34 Gallons of Honey", images:[{public_id:"", url:"", src:"https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}], category:15, subcategory:125, price:"500000", rating:3, description:"apple smell oud"},
    {id:4, farmId:3, name:"30 Bags, raw beans", images:[{public_id:"", url:"", src:"https://media.istockphoto.com/photos/boiled-red-crawfishon-close-up-top-of-view-picture-id1268431060"}], category:16, subcategory:126, price:"111700", rating:1, description:"Rice with salad and roasted chicken"},
    {id:5, farmId:0, name:"30 penters of Egusi", images:[{public_id:"", url:"", src:"https://media.istockphoto.com/photos/boiled-red-crawfishon-close-up-top-of-view-picture-id1268431060"}], category:16, subcategory:126, price:"53000", rating:1, description:"he likes eating fish"},
    {id:6, farmId:3, name:"Bole", price:"1200", category:17, subcategory:127, images:[{public_id:"", url:"", src:"https://media.istockphoto.com/photos/boiled-red-crawfishon-close-up-top-of-view-picture-id1268431060"}],  rating:2, description:"Roasted plantain mixed with yam and potato"}]
}


export const shopProducts = () => {
    return [{id:0, shopId:2, name:'19th Century Tv', images:[{public_id:"", url:"", src:"https://images.pexels.com/photos/8058637/pexels-photo-8058637.jpeg?cs=srgb&dl=pexels-eva-elijas-8058637.jpg&fm=jpg"}], category:18, subcategory:128, price:"600000", rating:5, description:'core i5, 33 inches screen, 500GB HDD,', brand:"Fischela", color:"red", location:"enugu", qty:10, shipping:"yes" },
    {id:1, shopId:2, name:'300mbs Router', images:[{public_id:"", url:"", src:"https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?cs=srgb&dl=pexels-aditya-singh-4218546.jpg&fm=jpg"}], category:13, subcategory:123, price:"500050", rating:4, description:'2 eggs and one yale bread', brand:"Fischela", color:"red", location:"enugu", qty:10, shipping:"yes"},
    {id:2, shopId:2, name:"Apple Laptop", images:[{public_id:"", url:"", src:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}], category:14, subcategory:124, price:"250000", rating:5, description:"Black slim fit", brand:"Fischela", color:"red", location:"enugu", qty:10, shipping:"yes"},
    {id:3,  shopId:0, name:"Shiny Dell Laptop", images:[{public_id:"", url:"", src:"https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}], category:15, subcategory:125, price:"500000", rating:3, description:"apple smell oud", brand:"Fischela", color:"red", location:"enugu", qty:10, shipping:"yes"},
    {id:4, shopId:0, name:"Age old Printer", images:[{public_id:"", url:"", src:"https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}], category:16, subcategory:126, price:"111700", rating:1, description:"Rice with salad and roasted chicken", brand:"Fischela", color:"red", location:"enugu", qty:10, shipping:"yes"},
    {id:5, shopId:0, name:"Quantum phone", images:[{public_id:"", url:"", src:"https://cdn.pixabay.com/photo/2016/12/20/22/32/holiday-shopping-1921658_960_720.jpg"}], category:16, subcategory:126, price:"53000", rating:1, description:"he likes eating fish"},
    {id:6, shopId:0, name:"Radio", price:"1200", category:17, subcategory:127, images:[{public_id:"", url:"", src:"https://images.pexels.com/photos/4738073/pexels-photo-4738073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}],  rating:2, description:"Roasted plantain mixed with yam and potato", brand:"Fischela", color:"red", location:"enugu", qty:10, shipping:"yes"}]
}

export const orderList = () => {
  return [{price:40000,
    productName:"battery",
    amountpaid:40000,
    BDelivery:"false",
    SDelivery:"false",
    approved:"true",
    location:"enugu",
    paid:true,
    spaid:false,
    refund:false,
    paid:true,
    timeOfOrder:"21st February, 2022",},

  {price:40000,
    productName:"battery",
    amountpaid:40000,
    BDelivery:"false",
    SDelivery:"false",
    approved:"true",
    location:"enugu",
    paid:true,
    spaid:false,
    refund:false,
    paid:true,
    timeOfOrder:"21st February, 2022",}]
}