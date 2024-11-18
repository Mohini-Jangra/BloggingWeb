import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Author from './Pages/Author'
import AuthorDetails from './Pages/AuthorDetails'
import Privacy from './Pages/Privacy'
import TermsandCondition from './Pages/TermsandCondition'
import Error from './Pages/Error'
import Blog from './Pages/Blog'
import Blogdetails from './Pages/Blogdetails'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './style.css'
import AdminRoutes from './Admin/AdminRoutes'
import AddBlog from './Admin/AdminPages/AddBlog'
import BlogShow from './Admin/AdminPages/BlogShow'
import AdminBlogDetail from './Admin/AdminPages/AdminBlogDetail'
import MyAccount from './Admin/AdminPages/MyAccount'
const App = () => {
  return (
    <div className='theme-dark'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Author' element={<Author />} />
          <Route path='/AuthorDetails' element={<AuthorDetails />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/TermsandCondition' element={<TermsandCondition />} />
          <Route path='*' element={<Error />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Blogdetails' element={<Blogdetails />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route  element={<AdminRoutes/>}></Route>
          
         <Route path='AddBlog' element={<AddBlog/>} />
          <Route path='/Blogs' element={<BlogShow/>} />
          <Route path='AdminBlogDetail' element={<AdminBlogDetail/>} />
          <Route path='MyAccount' element={<MyAccount/>} />
   
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App