import { useAuth } from '../../context/authContext'
import { Navigate } from 'react-router-dom'
import { ThreeBody } from '@uiball/loaders'

export default function ProtectedRoute({children}) {
  
  const {user, loading} = useAuth()
  //agregar loader
  if (loading) return (<ThreeBody  size={35} speed={1.1} color="black" />)

  if(!user) return <Navigate to='login' />

  return <>{children}</>
}
