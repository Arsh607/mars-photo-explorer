const API_KEY = "fQaKtrXUE5IscIzFhdiweDsAO7ZOWZ1E9C4tvGqV"; 
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

// DOM Elements
const dateForm = document.getElementById("date-form");
const dateInput = document.getElementById("date-input");
const photoGallery = document.getElementById("photo-gallery");

async function fetchPhotos(date) {
    try {
      const response = await fetch(`${BASE_URL}?earth_date=${date}&api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }
      const data = await response.json();
      return data.photos;
    } catch (error) {
      console.error("Error fetching photos:", error);
      alert("Failed to fetch photos. Please try again.");
      return [];
    }
  }