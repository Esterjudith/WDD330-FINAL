export function initReservation() {
    const form = document.getElementById("reservation-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Reservation submitted!");
        form.reset();
      });
    }
  }
  document.addEventListener("DOMContentLoaded", initReservation);