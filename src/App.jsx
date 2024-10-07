import Navbar from './components/Navbar'
import HamburgerMenu from './components/HamburgerMenu';
import Hero from './components/Hero'
import { useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  const [nav,setNav] = useState(window.innerWidth);
    useEffect(()=>{
        const handleNav=()=>setNav(window.innerWidth);
        window.addEventListener('resize',handleNav);
        return ()=>window.removeEventListener('resize',handleNav)
    },[])
  return (
    <>
    {(nav > 800) ? <Navbar/> : <HamburgerMenu/>}
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
    </>
  )
}

export default App
