import { useAuth } from '../../context/authContext'

export default function Home() {
  
  const {user} = useAuth()

  console.log(user);

  return (
    <>Home</>
  )
}
