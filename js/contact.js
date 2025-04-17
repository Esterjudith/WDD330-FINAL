export function initContact() {
  mapboxgl.accessToken = 'pk.eyJ1IjoianVkeWgxMjM0IiwiYSI6ImNtOWxrajYwejA2MzEya3E3OXNpdTg5dnUifQ.bK2XVze3pPd8bArTiLSKgw';

  const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-111.7890, 33.3528], 
    zoom: 14
  });

  new mapboxgl.Marker()
    .setLngLat([-111.7890, 33.3528])
    .setPopup(new mapboxgl.Popup().setText("Deep Fork Eatery"))
    .addTo(map);
}

document.addEventListener("DOMContentLoaded", initContact);
  