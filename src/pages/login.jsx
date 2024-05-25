import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        // Login sukses, arahkan ke halaman beranda
        setSuccess("Login berhasil!");
        setError("");
        navigate("/Home");
      } else {
        // Login gagal, tampilkan pesan error
        setError("Email atau password salah");
        setSuccess("");
      }
    } else {
      // Tidak ada data pengguna di local storage
      setError("Tidak ada pengguna terdaftar");
      setSuccess("");
    }
  };

  return (
    <div className="login_page">
      <div className="kiri w-100"></div>
      <div className="login_form w-100 d-flex justify-content-around">
        <form onSubmit={handleLogin} className="formaja w-75 pb-5 pt-5 bg-light shadow-lg rounded-5">
          <div className="pt-4">
            <h1 className="fw-bold text-center">Login</h1>
            <div className="text-center">
              <span>
                Belum punya akun? <Link to="/daftar" className="text-dark">Daftar</Link>
              </span>
            </div>
          </div>

          <div>
            <div className="login_rawr">
              <label htmlFor="email">Email</label> <br />
              <input
                type="email"
                id="email"
                className="rounded-3 w-75"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="login_riwr">
              <label htmlFor="password">Your Password</label> <br />
              <input
                type="password"
                id="password"
                className="rounded-3 w-75"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="pt-4 text-center">
            <button type="submit" className="button w-25 rounded-3 fs-6 fw-bold mb-4">
              Login
            </button>
           
            {error && <div className="alert alert-danger text-center">{error}</div>}
          {success && <div className="alert alert-success text-center">{success}</div>}

          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
