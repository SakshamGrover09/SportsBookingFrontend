import React, { useState, useEffect } from 'react';
import axios from '../axios';

const BookingForm = () => {
  const [centres, setCentres] = useState([]);
  const [centreId, setCentreId] = useState('');
  const [sports, setSports] = useState([]);
  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');

  useEffect(() => {
    const fetchCentres = async () => {
      const response = await axios.get('/centres');
      setCentres(response.data);
    };
    fetchCentres();
  }, []);

  const handleCentreChange = (id) => {
    const selectedCentre = centres.find(centre => centre._id === id);
    setCentreId(id);
    setSports(selectedCentre ? selectedCentre.sports : []);
    setSport('');
    setAvailableSlots([]);
  };

  const handleFetchSlots = async () => {
    if (!centreId || !sport || !date) {
      alert('Please select a centre, sport, and date');
      return;
    }
    const response = await axios.get('/bookings/slots', {
      params: { centreId, sport, date },
    });
    setAvailableSlots(response.data);
  };

  const handleBooking = async () => {
    if (!selectedSlot) {
      alert('Please select a time slot');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/bookings',
        {
          centreId,
          sport,
          date,
          startTime: selectedSlot,
          endTime: `${parseInt(selectedSlot.split(':')[0]) + 1}:00`,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Booking successful!');
    } catch (error) {
      alert('Booking failed. Try again later.');
    }
  };

  return (
  //   <div className="container mt-5">
  //     <h2>Book a Slot</h2>
  //     <div className="form-group">
  //       <label>Select Centre</label>
  //       <select className="form-control" onChange={(e) => handleCentreChange(e.target.value)}>
  //         <option value="">Select Centre</option>
  //         {centres.map((centre) => (
  //           <option key={centre._id} value={centre._id}>{centre.name}</option>
  //         ))}
  //       </select>
  //     </div>
  //     <div className="form-group mt-3">
  //       <label>Select Sport</label>
  //       <select className="form-control" onChange={(e) => setSport(e.target.value)}>
  //         <option value="">Select Sport</option>
  //         {sports.map((sport) => (
  //           <option key={sport} value={sport}>{sport}</option>
  //         ))}
  //       </select>
  //     </div>
  //     <div className="form-group mt-3">
  //       <label>Select Date</label>
  //       <input type="date" className="form-control" onChange={(e) => setDate(e.target.value)} />
  //     </div>
  //     <button className="btn btn-primary mt-3" onClick={handleFetchSlots}>Check Availability</button>

  //     {availableSlots.length > 0 && (
  //       <div className="form-group mt-3">
  //         <label>Select Available Slot</label>
  //         <select className="form-control" onChange={(e) => setSelectedSlot(e.target.value)}>
  //           <option value="">Select Time Slot</option>
  //           {availableSlots.map((slot) => (
  //             <option key={slot} value={slot}>{slot}:00 - {parseInt(slot) + 1}:00</option>
  //           ))}
  //         </select>
  //         <button className="btn btn-success mt-3" onClick={handleBooking}>Book Now</button>
  //       </div>
  //     )}
  //   </div>
  // );

  
  <div className="container  mt-5 d-flex justify-content-center">
  <div className="card p-4" style={{ maxWidth: '500px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  backgroundColor: '#6ac5fe'  }}>
    <h2 className="text-center mb-4">Book a Slot</h2>
    <div className="form-group">
      <label>Select Centre</label>
      <select 
        className="form-control" 
        onChange={(e) => handleCentreChange(e.target.value)} 
        style={{ borderRadius: '5px' }}
      >
        <option value="">Select Centre</option>
        {centres.map((centre) => (
          <option key={centre._id} value={centre._id}>{centre.name}</option>
        ))}
      </select>
    </div>
    
    <div className="form-group mt-3">
      <label>Select Sport</label>
      <select 
        className="form-control" 
        onChange={(e) => setSport(e.target.value)} 
        style={{ borderRadius: '5px' }}
      >
        <option value="">Select Sport</option>
        {sports.map((sport) => (
          <option key={sport} value={sport}>{sport}</option>
        ))}
      </select>
    </div>
    
    <div className="form-group mt-3">
      <label>Select Date</label>
      <input 
        type="date" 
        className="form-control" 
        onChange={(e) => setDate(e.target.value)} 
        style={{ borderRadius: '5px' }}
      />
    </div>
    
    <button 
   
      className="btn btn-primary w-100 mt-4" 
      onClick={handleFetchSlots} 
      style={{ borderRadius: '5px',backgroundColor: '#1A43BF'  }}
    >
      Check Availability
    </button>

    {availableSlots.length > 0 && (
      <div className="form-group mt-4">
        <label>Select Available Slot</label>
        <select 
          className="form-control" 
          onChange={(e) => setSelectedSlot(e.target.value)} 
          style={{ borderRadius: '5px' }}
        >
          <option value="">Select Time Slot</option>
          {availableSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}:00 - {parseInt(slot) + 1}:00
            </option>
          ))}
        </select>
        <button 
       
          className="btn btn-success w-100 mt-3" 
          onClick={handleBooking} 
          style={{ borderRadius: '5px', backgroundColor: '#1A43BF' }}
        >
          Book Now
        </button>
      </div>
    )}
  </div>
</div>
  );
};

export default BookingForm;
