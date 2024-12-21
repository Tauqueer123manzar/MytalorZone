import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
function App() {
 

  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blog' element={<h1>blog</h1>}/> 
        <Route path='/contact' element={<h1>contact</h1>}/>
      </Routes>
    </>
  )
}

export default App
