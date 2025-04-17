export function initReservation() {
  const form = document.getElementById("reservation-form");

  // Prefill if data exists in localStorage
  const savedData = JSON.parse(localStorage.getItem("lastReservation"));
  if (savedData) {
    form.elements["name"].value = savedData.name || "";
    form.elements["email"].value = savedData.email || "";
    form.elements["date"].value = savedData.date || "";
    form.elements["time"].value = savedData.time || "";
    form.elements["guests"].value = savedData.guests || "";
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const dataObj = Object.fromEntries(formData.entries());

      // Save to localStorage
      localStorage.setItem("lastReservation", JSON.stringify(dataObj));

      const queryParams = new URLSearchParams(dataObj);
      const url = `https://run.mocky.io/v3/95521d8d-532f-440b-a3a7-8e34bddfafd7?${queryParams.toString()}`;

      try {
        const response = await fetch(url);
        const result = await response.json();

        alert("Reservation submitted successfully!\n" + JSON.stringify(result));
        form.reset();
      } catch (error) {
        console.error("Reservation failed:", error);
        alert("There was a problem submitting your reservation.");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", initReservation);