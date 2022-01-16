import axios from 'axios';

export const listCategories = async () =>{
    return await axios.get(process.env.REACT_APP_LOCALHOST+"/api/categories")
}

export const createCategory = async (name, authToken)=>{
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/category", {name}, {headers:{authToken}})
}

export const readCategory = async (slug) => {
    return await axios.get(process.env.REACT_APP_LOCALHOST+"/api/category/"+slug)
} 

export const updateCategory = async (slug, name, authToken) => {
    return await axios.put(process.env.REACT_APP_LOCALHOST+"/api/category", {name, slug}, {headers:{authToken}})
}

export const deleteCategory = async (slug, authToken) => {
    console.log("THIS IS STRICTLY FROM TTHE DELETE CAT",authToken)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/categoryd", {slug}, {headers:{authToken}})
}
