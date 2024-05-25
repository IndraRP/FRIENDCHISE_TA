import {Routes, Route}from "react-router-dom"

import Home from "./pages/Home"
import Franchiseaja from "./pages/Franchise"
import Testimoni from "./pages/Testimoni"

import Check from "./pages/Check"

import Homeadmin from "./pages/Home_admin"
import Read from "./pages/Read_admin"

import Loginadmin from "./pages/Login_admin"
import Login from "./pages/login"
import Daftar from "./pages/daftar"

import MyNavbar from "./Components/Navbar"
import Footer from "./Components/Footer"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
<MyNavbar/>

    <Routes>
     <Route path="/" Component={Home} />
     <Route path="/Franchise" Component={Franchiseaja} />
     <Route path="/Testimoni" Component={Testimoni} />

     <Route path="/Check" Component={Check} />

     <Route path="/login" Component={Login} />
     <Route path="/daftar" Component={Daftar} />
     <Route path="/Login_admin" Component={Loginadmin} />

     <Route path="/Home_admin" Component={Homeadmin} />
     <Route path="/Read_admin" Component={Read} />

    </Routes>

    <Footer/>
    </div>
  );
}
export default App
