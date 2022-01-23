import axios from "axios";
import {createHistoryQuery} from "../../constants/schemas"

export const CreateHistory = async ({type, name, sourceId, targetId, description}) => {

    const result = await axios.post(process.env.REACT_APP_LOCALHOST+"/create/history", {type, name, sourceId, targetId, description} )
    console.log(`${sourceId} ${name} ${type} ${sourceId} ${description}`)
    return result
    
}
