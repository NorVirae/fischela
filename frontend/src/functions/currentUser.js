import axios from 'axios';

export const currentUser = async (authToken) => {
    console.log(process.env.REACT_APP_API)
    return await axios.post(process.env.REACT_APP_LOCALHOST+"/api/currentuser", {},
        {headers:{authToken}})
}