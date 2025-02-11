import { Route ,Routes} from 'react-router-dom'
import './App.css'
import Content from './pages/Content'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import History from './pages/History'




function App() {

  return (
    <>
    <Header/>
   
    <Routes>
      
      <Route element={<Content/>} path='/'></Route>
      <Route element={<Home/>} path='/home'> </Route>
      <Route element={<History/>} path='/history'></Route>
      

    </Routes>
    <Footer/>
    </>
    
  )
}

export default App
