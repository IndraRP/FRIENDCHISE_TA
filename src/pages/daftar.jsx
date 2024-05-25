import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi input
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok");
      return;
    }

    // Simpan data ke local storage
    localStorage.setItem("user", JSON.stringify({ email, password }));

    // Arahkan ke halaman login
    navigate("/login");
  };

  return (
    <div className="login_page">
      <div className="kiri w-100"></div>
      <div className="login_form w-100 d-flex justify-content-around">
        <form onSubmit={handleSubmit} className="formaja w-75 pb-5 pt-5 bg-light shadow-lg rounded-5">
          <div className="pt-4">
            <h1 className="fw-bold text-center">Daftar</h1>
            <div className="text-center">
              <span>Buruan daftar FriendChise!!!</span>
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
            <div className="login_riwr">
              <label htmlFor="confirmPassword">Konfirm Password</label> <br />
              <input
                type="password"
                id="confirmPassword"
                className="rounded-3 w-75"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="pt-4 text-center">
            <button type="submit" className="button w-25 rounded-3 fs-6 fw-bold">
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
