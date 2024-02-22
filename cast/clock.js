//DATE AND HOUR
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("date").innerHTML = day + " - " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}