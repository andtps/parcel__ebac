const eventDate = new Date("March 28, 2025 00:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor(distance % 86400000 / 3600000);
    const minutes = Math.floor(distance % 3600000 / 60000);
    const seconds = Math.floor(distance % 60000 / 1000);
    document.getElementById("contador").innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("contador").innerHTML = "Evento iniciado!";
    }
}
const countdownInterval = setInterval(updateCountdown, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
