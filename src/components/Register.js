import React, { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', { username, password });
      alert('Registration successful. Please login.');
      navigate('/login');
    } catch (error) {
      alert('Registration failed.');
    }
  };

  return (
  //   <div className="container mt-5">
  //     <h2>Register</h2>
  //     <form onSubmit={handleSubmit}>
  //       <div className="form-group">
  //         <label>Username</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label>Password</label>
  //         <input
  //           type="password"
  //           className="form-control"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </div>
  //       <button type="submit" className="btn btn-primary mt-3">Register</button>
  //     </form>
  //   </div>
  // );
//   <div className="container mt-5 d-flex justify-content-center" >
//   <div className="card p-4" style={{ maxWidth: '400px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',backgroundColor: '#6ac5fe' }}>
//     <div className="text-center mb-4">
//       <img 
//         src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/abstract-sports-background_G1h9Aqo__thumb.jpg" 
//         alt="Register" 
//         className="img-fluid rounded-circle border" 
//         style={{ width: '100px', height: '100px' }} 
//       />
//     </div>
//     <h2 className="text-center">Register</h2>
//     <form onSubmit={handleSubmit}>
//       <div className="form-group mb-3">
//         <label>Username</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={{ borderRadius: '5px' }}
//         />
//       </div>
//       <div className="form-group mb-3">
//         <label>Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{ borderRadius: '5px' }}
//         />
//       </div>
//       <button style={{ backgroundColor: '#1A43BF' }} type="submit" className="btn btn-primary w-100 mt-3" style={{ borderRadius: '5px' }}>
//         Register
//       </button>
//     </form>
//   </div>
// </div>

 <div className="container  mt-5 d-flex justify-content-center">
  <div className="card p-4" style={{ maxWidth: '800px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#6ac5fe' }}>
    <div className="text-center mb-4">
      <img 
        src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/abstract-sports-background_G1h9Aqo__thumb.jpg" 
        alt="Register" 
        className="img-fluid rounded-circle border" 
        style={{ width: '100px', height: '100px' }} 
      />
    </div>
    <h2 className="text-center">Register</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ borderRadius: '5px' }}
        />
      </div>
      <div className="form-group mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderRadius: '5px' }}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 mt-3" style={{ borderRadius: '5px', backgroundColor: '#1A43BF' }}>
        Register
      </button>
    </form>
  </div>
  </div>





 
  

  );
};

export default Register;
