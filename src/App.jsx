import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Chatting from './components/pages/chatting/Chatting'
import Login from './components/pages/login/Login'
import SignUp from './components/pages/signup/SignUp'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import Home from './components/pages/home/HomePage'
import AddUser from './components/pages/addUser/AddUser'
import ViewUsers from './components/pages/viewUsers/ViewUsers'
import AddPost from './components/pages/addPost/AddPost'
import ViewPost from './components/pages/viewPost/ViewPost'
import EditUser from './components/pages/editUser/EditUser'
import AddCounsellors from './components/pages/addCounsellors/AddCounsellors'
import ViewCounsellors from './components/pages/viewCounsellors/ViewCounsellors'
import AddArticles from './components/pages/addArticles/AddArticles'
import ViewArticles from './components/pages/viewArticles/ViewArticles'
import EditArticles from './components/pages/editArticles/EditArticles'
import EditCounsellors from './components/pages/editCounsellors/EditCounsellors'
import EditPost from './components/pages/editPost/EditPost'

function App() {
  const {authUser} = useAuthContext();

  return (
    <div className='p-4 h-screen flex  items-center justify-center'>
      <Routes>
        <Route path='/chatting' element={authUser ? <Chatting/> : <Navigate to={"/login"}/>}/>

        <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/>}/>

        <Route path='/login' element={authUser ? <Navigate to={"/"}/> : <Login/>}/>
        
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/addCounsellors' element={<AddCounsellors/>}/>
        <Route path='/viewCounsellors' element={<ViewCounsellors/>}/>
        <Route path='/editCounsellors/:id' element={<EditCounsellors/>}/>
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/addPost' element={<AddPost/>}/>
        <Route path='/editPost/:id' element={<EditPost/>}/>
        <Route path='/viewusers' element={<ViewUsers/>}/>
        <Route path='/viewposts' element={<ViewPost/>}/>
        <Route path='/addArticles' element={<AddArticles/>}/>
        <Route path='/viewArticles' element={<ViewArticles/>}/>
        <Route path='/editArticles/:id' element={<EditArticles/>}/>
        <Route path='/signup' element={authUser ? <Navigate to="/"/> : <SignUp/>}/>
        <Route path='/editUser/:id' element={<EditUser/>}/>

      </Routes>
      <Toaster/>
      

    </div>
  )
}

export default App
