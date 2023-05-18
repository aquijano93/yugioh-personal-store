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
    <div className='w-full max-w-xs m-auto'>

    <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

    <div className='mb-4'>

      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        name='email' 
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        placeholder='youremail@company.com'
        onChange={handleChange}  
      />

    </div>
    
    <div className='mb-4'>

      <label htmlFor="password">Password</label>
      <input
        type="password"  
        name='password' 
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='password'
        onChange={handleChange}
      />

    </div>

      <button className='bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Register</button>

    </form>

    </div>
  )
}
