import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //     <div className="container">
  //       <Link className="navbar-brand" to="/">Sports Booking</Link>
  //       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarNav">
  //         <ul className="navbar-nav ml-auto">
  //           {localStorage.getItem('token') ? (
  //             <>
  //               <li className="nav-item">
  //                 <Link className="nav-link" to="/my-bookings">My Bookings</Link>
  //               </li>
  //               <li className="nav-item">
  //                 <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
  //               </li>
  //             </>
  //           ) : (
  //             <>
  //               <li className="nav-item">
  //                 <Link className="nav-link" to="/login">Login</Link>
  //               </li>
  //               <li className="nav-item">
  //                 <Link className="nav-link" to="/register">Register</Link>
  //               </li>
  //             </>
  //           )}
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
  <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#1A43BF' }}>
  <div className="container">
    <Link className="navbar-brand text-white" to="/" style={{ fontWeight: 'bold' }}>
      Sports Booking
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        {localStorage.getItem('token') ? (
          <>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/my-bookings">
                My Bookings
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link text-white" onClick={handleLogout} style={{ textDecoration: 'none' }}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
