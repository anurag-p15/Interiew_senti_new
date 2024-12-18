import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../Home/navbar';
import Footer from '../Home/footer';
import './login.css';
import axios from 'axios';

function Login() {
  useEffect(() => {
    // Set the title for the Home page
    document.title = 'Join our Platform';
  }, []);

  const [formData, setFormData] = useState({
    full_name: '',
    mobile_number: '',
    email: '',
    password: '',
    graduation_year: '',
    graduation_stream: '',
    date_of_birth: '',
    about: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/signup', formData);
      if (response && response.data) {
        alert(response.data.message);
        window.location.reload();   // Access response.data only if it exists
      } else {
        alert("Unexpected response structure");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.detail);
      } else {
        alert("An error occurred");
      }
    }
  };
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login', loginData);
      alert('Login successful');
      localStorage.setItem('token', response.data.access_token);
      window.location.href = '/dashboard';
    } catch (error) {
      alert(error.response.data.detail);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="box" style={{ marginBottom: '5%' }}>
          <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
              <form onSubmit={handleSignup}>
                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                <div className="row">
                  <div className="col-lg-6">
                    <p>Enter your Full Name</p>
                    <input
                      type="text"
                      name="full_name"
                      placeholder="User name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                    />
                    <p>Enter your Mobile Number</p>
                    <input
                      type="text"
                      name="mobile_number"
                      maxLength="10"
                      placeholder="User number"
                      value={formData.mobile_number}
                      onChange={handleInputChange}
                      required
                    />
                    <p>Create your Email Address</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <p>Create your Password</p>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <p>Year of Graduation</p>
                    <input
                      type="text"
                      name="graduation_year"
                      placeholder="Graduation Year"
                      value={formData.graduation_year}
                      onChange={handleInputChange}
                      required
                    />
                    <p>Graduation Stream</p>
                    <input
                      type="text"
                      name="graduation_stream"
                      placeholder="Graduation Stream"
                      value={formData.graduation_stream}
                      onChange={handleInputChange}
                      required
                    />
                    <p>Date of Birth (DD/MM/YYYY)</p>
                    <input
                      type="date"
                      name="date_of_birth"
                      value={formData.date_of_birth}
                      onChange={handleInputChange}
                      required
                    />
                    <p>About yourself</p>
                    <textarea
                      name="about"
                      placeholder="Tell us about yourself"
                      value={formData.about}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit">Sign up</button>
              </form>
            </div>

            <div className="login">
              <form onSubmit={handleLogin}>
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <p>Enter your Email Address</p>
                <input
                  type="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
                <p>Enter your Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                />
                <button name="check" style={{ marginBottom: '5%' }}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
