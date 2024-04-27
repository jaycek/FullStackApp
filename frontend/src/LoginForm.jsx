import React ,{useState} from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        email:'',
        password:''     
        
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/users/login",formData);
            sessionStorage.setItem('userToken',response.data.token)
            navigate('/')

        }catch(error){
            console.error(error)
        }


    }
  return (
    <div className='container'>
        <h2 className='title'>Login</h2>
        <form onSubmit={handleSubmit} className='form'>
            <div className='title'>Welcome </div>
       
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="name">Password:</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
          
            <button type="submit">Login</button>
        </form>
      
    </div>
  )
}

export default LoginForm
