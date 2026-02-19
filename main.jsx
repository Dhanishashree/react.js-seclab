import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './Home.jsx'
import Post from './Post.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/post" element={<Post/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
