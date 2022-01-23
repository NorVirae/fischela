import {useState} from 'react'


const Alert  = ({msg, type="success"}) =>{
    const [show, setShow] = useState(true)
    if (show){
        if (type === "error"){
            return <div className="alert alert-error">
            <i class="fas fa-exclamation-triangle"></i>  <p>{msg}</p><i onClick={e=>setShow(!show)} class="fas fa-times c-btn"></i>
            </div>
        }else if (type === "success") {
            return <div className="alert alert-success">
                    <i className="fas fa-info"></i>  <p>{msg}</p><i onClick={e=>setShow(!show)} class="fas fa-times c-btn"></i>
            </div>
        }
    }else {
        return null
    }
}



export default Alert;