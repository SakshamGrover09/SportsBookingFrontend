import React, { useEffect, useState } from 'react';
import axios from '../axios';

const MyBookings = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/bookings/my-bookings', {
          headers: { authorization: `Bearer ${token}` },
        });
        setUpcoming(response.data.upcoming);
        setPast(response.data.past);
      } catch (error) {
        alert('Failed to fetch bookings');
      }
    };
    fetchBookings();
  }, []);

  return (
  //   <div className="container mt-5">
  //     <h2>My Bookings</h2>
  //     <h3>Upcoming Bookings</h3>
  //     <ul className="list-group">
  //       {upcoming.map((booking) => (
  //         <li className="list-group-item" key={booking._id}>
  //           {booking.date} - {booking.sport} at {booking.startTime}:00 in Centre {booking.centreId}
  //         </li>
  //       ))}
  //     </ul>
  //     <h3 className="mt-4">Past Bookings</h3>
  //     <ul className="list-group">
  //       {past.map((booking) => (
  //         <li className="list-group-item" key={booking._id}>
  //           {booking.date} - {booking.sport} at {booking.startTime}:00 in Centre {booking.centreId}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  <div className="container mt-5">
  <div className="card p-4" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',backgroundColor: '#6ac5fe' }}>
    <h2 className="text-center mb-4">My Bookings</h2>

    <h3 className="mb-3">Upcoming Bookings</h3>
    {upcoming.length > 0 ? (
      <ul className="list-group mb-4">
        {upcoming.map((booking) => (
          <li 
            className="list-group-item d-flex justify-content-between align-items-center"
            key={booking._id}
            style={{ borderRadius: '5px',backgroundColor: '#6ac5fe' }}
          >
            <span>
              {booking.date} - {booking.sport} at {booking.startTime}:00 
            </span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-muted">No upcoming bookings.</p>
    )}

    <h3 className="mt-4 mb-3">Past Bookings</h3>
    {past.length > 0 ? (
      <ul className="list-group">
        {past.map((booking) => (
          <li 
            className="list-group-item d-flex justify-content-between align-items-center"
            key={booking._id}
            style={{ borderRadius: '5px', backgroundColor: '#6ac5fe'}}
          >
            <span>
              {booking.date} - {booking.sport} at {booking.startTime}:00 
            </span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-muted">No past bookings.</p>
    )}
  </div>
</div>
  );
};

export default MyBookings;
