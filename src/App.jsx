import {Routes, Route}from "react-router-dom"

import Home from "./pages/Home"
import Franchiseaja from "./pages/Franchise"
import Testimoni from "./pages/Testimoni"

import Check from "./pages/Check"

import Login from "./pages/login"
import Daftar from "./pages/daftar"
import DaftarFranc from "./pages/DaftarFranchise"


import Footer from "./Components/Footer"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>

    <Routes>
     <Route path="/" Component={Login} />
     <Route path="/Home" Component={Home} />
     <Route path="/Franchise" Component={Franchiseaja} />
     <Route path="/Testimoni" Component={Testimoni} />

     <Route path="/Check" Component={Check} />
     <Route path="/DaftarFranchise" Component={DaftarFranc} />

     <Route path="/login" Component={Login} />
     <Route path="/daftar" Component={Daftar} />

    </Routes>

    <Footer/>
    </div>
  );
}
export default App
