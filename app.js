const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const showTime = document.querySelector('h1');

function setDate() {
    const now = new Date(); // Objeto para datas e horas
    const seconds = now.getSeconds(); // de 0 à 59
    const secondDegrees = (seconds / 60) * 360 + 90; // Transforma segundos em graus. É necessario somar 90 pois é a posição inicial dos ponteiros do relogio
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const mins = now.getMinutes();
    const minDegrees = mins / 6 + 90; // Simplificado
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegree = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    if (mins < 10) {
        showTime.innerHTML = `${hours}:0${mins}:${seconds}`;
    } else {
        showTime.innerHTML = `${hours}:${mins}:${seconds}`;
    }
    if (seconds < 10) {
        showTime.innerHTML = `${hours}:${mins}:0${seconds}`;
    } else {
        showTime.innerHTML = `${hours}:${mins}:${seconds}`;
    }

    const handBug = document.querySelectorAll('.hand');
    if (seconds === 0) {
        handBug.forEach((hand) => (hand.style.transitionDuration = 'none'));
    } else {
        handBug.forEach((hand) => (hand.style.transitionDuration = '0.05s'));
    }
}
setInterval(setDate, 1000); // Atualiza os relogio em um intervalo de 1s/1s