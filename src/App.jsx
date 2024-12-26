import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Login from './pages/Login'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
function App() {
 
  useEffect(()=>{
    AOS.init({
      duration:2000
    });
  },[])
  
  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blog' element={<Blog/>}/> 
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </>
  )
}

export default App
