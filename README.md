### **College ID:** IIT2021188: Saksham Grover <br>
### **College email:** iit2021188@iiita.ac.in <br>

### **Frontend Deployment Link**: https://67101cf03a6926fdd55daaff--brilliant-gumdrop-d803b2.netlify.app <br>
### **Frontend Deployment Link**: https://sportsbookingbackend.onrender.com/api <br>

## Sports Booking Frontend <br>
This is the frontend for the Sports Booking App, built using React. It allows users to log in, view available sports centres, select sports, choose booking slots, and manage their bookings.

# Directory Structure <br>

sports-booking-frontend/ <br>
│ <br>
├── public/ <br>
│   ├── index.html          // Main HTML template for React <br>
│ <br>
├── src/ <br>
│   ├── components/ <br>
│   │   ├── Navbar.js       // Navigation bar for the app <br>
│   │   ├── BookingForm.js  // Form for submitting a booking <br>
│   │   ├── Login.js        // User login form <br>
│   │   ├── Register.js       // User signup form <br>
│   │   ├── MyBooking.js  // Displays user’s bookings (upcoming and past) <br>
│   │ <br>
│   ├── Axios.js <br>
│   │ <br>
│   ├── api/ <br>
│   │   ├── auth.js         // Handles API calls for user authentication <br>
│   │   ├── bookings.js     // Handles API calls for booking operations <br>
│   │   └── centres.js      // Handles API calls for centre data <br>
│   │ <br>
│   ├── App.js              // Root component with routing setup <br>
│   ├── index.js            // Main entry point for React <br>
├── .env                    // API URL configuration <br>
├── package.json            // Project dependencies and scripts <br>
└── README.md               // Documentation for the frontend <br>


## Setup Instructions <br>

### Clone the Repository: <br>
git clone https://github.com/your-repository/sports-booking-frontend.git <br>
cd sports-booking-frontend

### Install Dependencies: <br>
npm install

### Create a .env File: <br>
Add the backend API URL: <br>
REACT_APP_API_URL=http://localhost:5000

### Run the Development Server: <br>
npm start <br>
The app will be available at http://localhost:3000.

### Features <br>

L**ogin & Signup:** Users can create an account or log in with an existing one. <br>
**View Centres & Sports:** Users can view available sports centres and select sports. <br>
**Book Slots:** Choose a date and time slot for booking a sport. <br>
**View Bookings:** View upcoming and past bookings with details. <br>

### Technologies Used <br>

React, React Router <br>
Context API for state management <br>
Axios for API calls
CSS for styling
