import React ,{useState} from 'react'
import './Signup.css'
import axios from 'axios'

const SignupForm = () => {

    const [formData,setFormData] = useState({
        name:'',
        username:'',
        password:'',
        confirmPassword:'',
        email:''
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/signup",formData);
            console.log(response.data)
        }catch(error){
            console.error(error)
        }


    }
  return (
    <div className='container'>
        <h2 className='title'>SignUp</h2>
        <form onSubmit={handleSubmit} className='form'>
            <div className='title'>Welcome </div>
            <div className='subtitle'>Let's create your account!</div>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="name">Username:</label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
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
            <div>
                <label htmlFor="name">Confirm Password:</label>
                <input 
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </div>
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
            <button type="submit">Sign Up</button>
        </form>
      
    </div>
  )
}

export default SignupForm
