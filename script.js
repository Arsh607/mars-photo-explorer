const API_KEY = "fQaKtrXUE5IscIzFhdiweDsAO7ZOWZ1E9C4tvGqV"; 
const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";


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

  function displayPhotos(photos) {
    photoGallery.innerHTML = ""; 
  
    if (photos.length === 0) {
      photoGallery.innerHTML = "<p>No photos available for this date.</p>";
      return;
    }
  
    photos.slice(0, 3).forEach(photo => {
      const photoCard = document.createElement("div");
      photoCard.className = "photo-card";
  
      const img = document.createElement("img");
      img.src = photo.img_src;
      img.alt = `Mars Rover Photo taken on ${photo.earth_date}`;
  
      const caption = document.createElement("p");
      caption.textContent = `Earth Date: ${photo.earth_date}, Sol: ${photo.sol}, Camera: ${photo.camera.full_name}`;
  
      photoCard.appendChild(img);
      photoCard.appendChild(caption);
      photoGallery.appendChild(photoCard);
    });
  }
  

  dateForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const selectedDate = dateInput.value;
    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }
  
    const photos = await fetchPhotos(selectedDate);
    displayPhotos(photos);
  });
  

  window.addEventListener("load", async () => {
    const significantDate = "2021-10-02"; 
    dateInput.value = significantDate;
    const photos = await fetchPhotos(significantDate);
    displayPhotos(photos);
  });
  