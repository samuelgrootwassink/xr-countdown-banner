// from https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to in Ymd format
const countDownDate = new Date("2021 10 11").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let dagen = Math.floor(distance / (1000 * 60 * 60 * 24));
  let uren = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuten = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconden = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById('dagen').innerHTML = dagen;
  document.getElementById('uren').innerHTML = uren;
  document.getElementById('minuten').innerHTML = minuten;
  document.getElementById('seconden').innerHTML = seconden;


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('dagen').innerHTML = '00';
    document.getElementById('uren').innerHTML = '00';
    document.getElementById('minuten').innerHTML = '00';
    document.getElementById('seconden').innerHTML = '00';
  }
}, 1000);