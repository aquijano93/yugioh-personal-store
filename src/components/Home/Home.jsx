import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { ThreeBody } from '@uiball/loaders'

export default function Home() {
  
  const {user, logout, loading} = useAuth()
  const navigate = useNavigate() 
  //agregar loaders
  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }finally{
    }
  }
  
  if (loading === true){
    <ThreeBody 
    size={35}
    speed={1.1} 
    color="black" 
    />
  } 

  return (
    <div className='w-full max-w-xs m-auto'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

        <h1 className='text-xl mb-4'>Welcome {user.displayName || user.email}! </h1>

        <button onClick={handleLogout} className='bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black'>
          Logout
        </button>

      </div>

    </div>
  )
}
