const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    var dateToday = new Date();
    var hours = dateToday.getHours();
    var minutes = dateToday.getMinutes();
    var seconds = dateToday.getSeconds();

    if (hours < 10) hours = '0' + hours;

    if (minutes < 10) minutes = '0' + minutes;
    
    if (seconds < 10) seconds = '0' + seconds;

    horas.innerHTML = hours;
    minutos.innerHTML = minutes;
    segundos.innerHTML = seconds;
})