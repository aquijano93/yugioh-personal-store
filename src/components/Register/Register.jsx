import {useState} from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const [user, setUser] = useState({
    email:'',
    password:'',
  });

  const {signup} = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(user.email, user.password)
      navigate('/')
    } catch (error) {
      // poner sweet alert o toastyfi
      
      setError(error.message)
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        name='email' 
        placeholder='youremail@company.com'
        onChange={handleChange}  
      />
    
      <label htmlFor="password">Password</label>
      <input
        type="password"  
        name='password' 
        id='password'
        onChange={handleChange}
      />

      <button>Register</button>

    </form>
  )
}
