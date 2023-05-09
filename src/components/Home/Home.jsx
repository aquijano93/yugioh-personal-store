
import { useAuth } from '../../context/authContext'

export default function Home() {
  
  const {user, logout, loading} = useAuth()
  const navigate = useNavigate() 

  const handleLogout = await () => {
    await logout()
  }
  
  if (loading === true){
    //agregar loader
    <h2>Loading</h2>
  } 

  return (
    <>

      <h1>Welcome {user.email}!</h1>

      <button onClick={handleLogout}>
        Logout
      </button>

    </>
  )
}
