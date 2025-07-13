import HomePage from './Homepage/Home.jsx'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Login from './loginpage/login.jsx'
import Signup from './loginpage/signup.jsx'
import AboutUs from './About us/Aboutus.jsx'
import Diet from './Diet/Diet.jsx'
function App() {

  return (
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/diet' element={<Diet/>}/>
     </Routes>
   </BrowserRouter>
  )
}

export default App