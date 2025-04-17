export function initReservation() {
  const form = document.getElementById("reservation-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const guests = document.getElementById("guests").value;

      // Construct the GET URL with query params
      const queryParams = new URLSearchParams({
        name,
        email,
        date,
        time,
        guests,
      });

      const url = `https://run.mocky.io/v3/95521d8d-532f-440b-a3a7-8e34bddfafd7?${queryParams.toString()}`;

      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          alert("Reservation submitted successfully!");
          form.reset();
        } else {
          alert("Failed to submit reservation. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("There was an error connecting to the reservation service.");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", initReservation);