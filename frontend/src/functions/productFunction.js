import axios from 'axios';

export const listProducts = async () =>{
    console.log("REACT_APP LOCAL FORM LIST PRODUCT",process.env.REACT_APP_LOCALHOST)
    return await axios.get(process.env.REACT_APP_LOCALHOST+"/api/products")
}

export const createProduct= async (values, authToken)=>{
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/product", values, {headers:{authToken}})
}

export const readProduct = async (slug) => {
    console.log("GOT IN SOMEHOW")
    return await axios.get(process.env.REACT_APP_LOCALHOST+"/api/product/"+slug)
}

export const updateProduct = async (values, authToken) => {
    return await axios.put(process.env.REACT_APP_LOCALHOST+"/api/product", values, {headers:{authToken}})
}

export const deleteProduct = async (slug, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE CAT",authToken)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/productd", {slug}, {headers:{authToken}})
}
