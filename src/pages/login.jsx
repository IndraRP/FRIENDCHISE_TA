 import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"



const login = () => {
  let navigate = useNavigate();


    return (
      <div  className="login_page ">
        <div className="kiri w-100">
        </div>

<div className="login_form w-100 d-flex justify-content-around">
        <form action="" className="formaja w-75 pb-5 pt-5 bg-light shadow-lg rounded-5">
          <div className="pt-4">
            <h1 className="fw-bold text-center">Login</h1>
            <div className="text-center">
            <span >Belum punya akun? <Link to='/daftar' className="text-dark">Daftar</Link></span>
            </div>
          </div>



<div>
          <div className="login_rawr">
          <label htmlFor="">Email</label> <br></br>
            <input type="email" className="rounded-3 w-75"/>
          </div>

          <div className="login_riwr">
            <label htmlFor="" className="">Your Password</label> <br></br>
            <input type="password"className="rounded-3 w-75"/>
          </div>
          </div>
<div className="pt-4 text-center">
<button className="button w-25 rounded-3 fs-6 fw-bold" onClick={()=> navigate("/")}>
Login
</button>
</div>

        </form>
        </div>

        </div>
    )
  }

  export default login