import axios from 'axios';

export const listOrders = async () =>{
    return await axios.get(process.env.REACT_APP_LOCALHOST+"/api/orders")
}

export const createOrder= async ({neworder,authToken} )=>{
    console.log("INSIDE CREATE ORDER")
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/order", {neworder}, {headers:{authToken}})
}

export const readOrder = async (id) => {
    console.log("GOT IN SOMEHOW")
    return await axios.get(process.env.REACT_APP_LOCALHOST+"/api/order/"+id)
}

export const updateOrder = async (values, authToken) => {
    return await axios.put(process.env.REACT_APP_LOCALHOST+"/api/order", values, {headers:{authToken}})
}

export const deleteOrder = async (id, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE CAT",authToken)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/orderd", {id}, {headers:{authToken}})
}
