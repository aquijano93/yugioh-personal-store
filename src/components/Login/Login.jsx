import {useState} from 'react';
import { useAuth } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  const [user, setUser] = useState({
    email:'',
    password:'',
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(user.email, user.password)
      navigate('/')
    } catch (error) {
      // poner sweet alert o toastyfi
      
      setError(error.message)
    }
  }

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }
  //agregar loaders

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (error) {
      // poner sweet alert o toastyfi
      setError(error.message)
    }
  } 

  return (
  < div className='w-full max-w-xs m-auto '>
    <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-[url(../public/bg-img.png)]'>

      <div className='mb-4'>

      <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
      <input 
        type="email" 
        name='email' 
        className='shadow appearance-none bg-slate-400 border font-bold text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        placeholder='youremail@company.com'
        onChange={handleChange}  
      />

      </div>

      <div className='mb-4'>

      <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
      <input
        type="password"  
        name='password'
        className='shadow appearance-none bg-slate-400 border font-bold text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
        id='password'
        onChange={handleChange}
      />

      </div>

      <button className='bg-yellow-500 hover:bg-yellow-600 text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>

    </form>

      <p className='my-4 text-sm flex justify-between text-white'>Don't have an account? <Link to='/register' className='text-decorationtext-decoration-line: underline hover:bg-violet-600 rounded'>Register</Link></p>

      <button onClick={handleGoogleSignin} className='bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded font-bold text-sm border-2 border-gray-300 py-2 px-4 w-full'>Google Login</button>
    
  </div>
  )
}
