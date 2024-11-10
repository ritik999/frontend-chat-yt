import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'flowbite-react'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen flex justify-center items-center'>
            {/* <Login /> */}
            {/* <Signup /> */}
            {/* <Home /> */}
            <Outlet />
      </div>
    </>
  )
}

export default App
