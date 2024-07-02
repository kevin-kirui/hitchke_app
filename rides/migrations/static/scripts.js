document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("offer-ride-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const ride = {
            driver: form.driver.value,
            start_location: form.start_location.value,
            end_location: form.end_location.value,
            date_time: form.date_time.value
        };

        // Display the ride in the rides list
        displayRide(ride);

        // Clear the form
        form.reset();
    });

    function displayRide(ride) {
        const ridesList = document.getElementById("rides");
        const rideItem = document.createElement("li");

        rideItem.textContent = `Driver: ${ride.driver}, From: ${ride.start_location}, To: ${ride.end_location}, On: ${ride.date_time}`;
        ridesList.appendChild(rideItem);
    }
});
