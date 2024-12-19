import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Layout } from './components'
import { Home, About, Contact, Users, UserDetail } from './pages'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="user/:id" element={<UserDetail/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
