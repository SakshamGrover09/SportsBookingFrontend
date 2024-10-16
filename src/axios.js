import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sportsbookingbackend.onrender.com/api', // Update with your backend URL if deployed
});

export default instance;

/*
    "cricket",
    "baseball",
    "tennis",
    "badminton",
    "squash",
    "pool",
    "table tennis"
*/