import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar({ scrollToGrid }){
  const navigate = useNavigate();
  const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if there's an authentication token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);


  const handleDashboardClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      // Redirect to login page if not authenticated
      navigate('/login');
    }
  };



  const handleLogout = () => {
    // Remove the token from localStorage and update the state
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleGiveInterviewClick = () => {
    if (location.pathname === '/') {
      // If already on Body page, scroll directly
      const gridElement = document.querySelector('.grid-container');
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to Body page and scroll
      navigate('/', { state: { scrollToGrid: true } });
    }
  };
    
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-red navbar-dark" style={{ paddingLeft: '2%'}}>
      <div className="container-fluid all-show">
        <a className="navbar-brand" href="/">
          <img
            src="https://i.postimg.cc/NFpfSzrd/logo.png"
            alt="Vedanta Limited"
            style={{ width: '100%', height: '60px' }}
          />
        </a>
        <section className="wrapper">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                      <button
                        className="nav-link"
                        style={{ textAlign: 'left' }}
                        onClick={handleGiveInterviewClick}
                      >
                        Give Interview
                      </button>
                    </li>
                   {/* Conditionally render Login/Register or Logout buttons */}
                   {!isAuthenticated ? (
                      <>
                        <li className="nav-item">
                          <button className="nav-link" style={{ textAlign: 'left' }} onClick={() => navigate('/login')}>
                            Register
                          </button>
                        </li>
                        <li className="nav-item">
                          <button className="nav-link" style={{ textAlign: 'left' }} onClick={() => navigate('/login')}>
                            Login
                          </button>
                        </li>
                      </>
                    ) : (
                      <li className="nav-item">
                        <button className="nav-link" style={{ textAlign: 'left' }} onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    )}

                  {/* Dashboard button with authentication check */}
                  <li className="nav-item">
                      <button className="nav-link" style={{ textAlign: 'left' }} onClick={handleDashboardClick}>
                        Dashboard
                      </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </nav>


        </>
    )
}


export default Navbar;