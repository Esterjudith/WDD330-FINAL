export function initContact() {
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Message sent!");
        form.reset();
      });
    }
  }
  
  export function initMap() {
    const mapDiv = document.getElementById("map");
    if (!mapDiv) return;
  
    const map = new google.maps.Map(mapDiv, {
      center: { lat: 33.3528, lng: -111.7890 },
      zoom: 15,
    });
  
    new google.maps.Marker({
      position: { lat: 33.3528, lng: -111.7890 },
      map: map,
      title: "Deep Fork Eatery",
    });
  }
  
  document.addEventListener("DOMContentLoaded", initContact);
  window.initMap = initMap;
  