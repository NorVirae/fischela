import React from 'react'


export const SpreadQty = ({products, setProducts, prod,qtysy, setQtysy, prods}) => {
    let newProds = products
    const setProds = (e)=>{
      for (let ct = 0; ct<products.length; ct++){
        if(newProds[ct]._id == prod._id){
          newProds[ct].newQty = e
        }
      }
      setProducts(newProds)
      console.log(products)
    }

    let qtyss = []
    for (let count = 1; count<=Number(prods); count++){
      console.log("THIS IS FROM THE COUNT",count)
      qtyss.push(count)
    }

    return (<select onChange={e=>{setProds(e)}} value={prod.newQty} defaultValue={1} style={{ width: '50%' }} placeholder="Tags Mode" >
              {qtyss.map((nums)=>{return <option key={nums} >{nums}</option>})}
              </select>)
    

  }

  