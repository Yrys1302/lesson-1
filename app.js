
function updateTime() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const now = new Date();

    // Update day
    const currentDay = days[now.getDay()];
    document.querySelectorAll(".days span").forEach(day => {
        day.classList.remove("active");
        if (day.textContent === currentDay) {
            day.classList.add("active");
        }
    });

    // Update time
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("time").textContent = `${hours} : ${minutes} : ${seconds}`;
}

// Update every second
setInterval(updateTime, 1000);
updateTime();