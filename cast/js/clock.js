//DATE AND HOUR
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["01","02","03","04","05","06","07","08","09","10","11","12"];

const d = new Date();
let day = weekday[d.getDay()];
let month = months[d.getMonth()];
document.getElementById("date").innerHTML = day + " - " + d.getDate() + "/" + month + "/" + d.getFullYear();

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

setTimeout(function(){
   location.reload(true);
}, 1820000);