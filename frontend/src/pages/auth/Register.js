import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../components/nav/Logo';
import {
   
    useQuery,
    useMutation,
    gql
  } from "@apollo/client";





const Register = (props)=>{
    

const query = gql`
      query users {
        users{
          name
          id
        }
      }


    `
const userQuery = gql`
      mutation addUser($name:String!, $phone:String, $password:String, $email:String){
        addUser(name:$name, phone:$phone, password:$password, email:$email){
          name
          email
          phone
        }
      }
`
const users = useQuery(query)
  console.log(users.data, users.error)

    const [addUser, {loading, data, error}] = useMutation(userQuery)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmuit = async (e) =>{
        e.preventDefault()
        await addUser({variables:{name, phone, email, password}})

        console.log(data)
        
    }

    const formRegister = () => <form className="flex flex-column justify-content-center" onSubmit={handleSubmuit}>
            <input className={"form-control"} placeholder={"E-mail"} name={email} onChange={e=>setEmail(e.target.value)} type={'email'} autoFocus />
            <input className={"form-control"} placeholder={"Name"} name={name} onChange={e=>setName(e.target.value)} type={'text'} autoFocus />
            <input className={"form-control"} placeholder={"phone"} name={phone} onChange={e=>setPhone(e.target.value)} type={'phone'} autoFocus />
            <input className={"form-control"} placeholder={"password"} name={password} onChange={e=>setPassword(e.target.value)} type={'password'} autoFocus />

            <br/>
            <button className={"btn-register"} type={"submit"}>Register</button>
            <Link to="/d/login" className="text-small text-info">have an account? click to login</Link><hr/>

        </form>
    return (

    <div className={"register mt-5"}>
      {JSON.stringify(data)}

        <Link className='text-info ml-5' to={"/"}>{"<< back"}</Link>

        <div className={"container flex flex-column justify-content-center align-items-center"}>
            <Logo/>
            <div className={"card p-2"}>
               <center> <h4>Register</h4></center>
                {formRegister()}
            </div>
        </div>
    </div>

    
    
    )
    
    }
export default Register;