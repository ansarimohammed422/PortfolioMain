// src/config.js

// This checks if the app is running locally or on Vercel
// const isLocal = window.location.hostname === "localhost";

// export const API_BASE_URL = isLocal
//   ? "http://localhost:8000"
//   : import.meta.env.VITE_API_BASE_URL;

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://portfoliomainbackend.onrender.com/";
