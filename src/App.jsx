import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/home'
import Success from './pages/success'
import Notfound from './pages/notfount'

function App() {
  return (
    <Router>
     <Toaster/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
   </Router>
  )
}

export default App
