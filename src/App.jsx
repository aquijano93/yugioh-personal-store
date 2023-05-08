import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import {AuthProvider} from './context/authContext'


export default function App() {
  return (
    <div className="bg-neutral-900 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}