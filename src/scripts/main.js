const eventDate = new Date("March 28, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("contador").innerHTML = "Evento iniciado!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);