
var d1 = [
/* -----------------------MONDAY----------------------------------- */

                       "(27.01.2025)",
/*                    _______________                               */

/* _______________________GUESTS___________________________________ */

  "00:00 am", "Name1", "Company",
  "00:00 am", "Name2", "Company",
  "00:00 am", "Name3", "Company",
  "00:00 am", "Name4", "Company",
  "9:00 am - 10.FEB.2025", "", "Flexifilms and Artsan"

/* ---------------------------------------------------------------- */
];

var d2 = [
/* -----------------------TUESDAY---------------------------------- */

                       "(28.01.2025)",
/*                    _______________                               */

/* _______________________GUESTS___________________________________ */

  "00:00 am", "Name1", "Company",
  "00:00 am", "Name2", "Company",
  "00:00 am", "Name3", "Company",
  "00:00 am", "Name4", "Company"

/* ---------------------------------------------------------------- */
];

var d3 = [
/* -----------------------WEDNESDAY-------------------------------- */

                       "(29.01.2025)",
/*                    _______________                               */

/* _______________________GUESTS___________________________________ */

  "00:00 am", "Name1", "Company",
  "00:00 am", "Name2", "Company",
  "00:00 am", "Name3", "Company",
  "00:00 am", "Name4", "Company"

/* ---------------------------------------------------------------- */
];

var d4 = [
/* -----------------------THURSDAY--------------------------------- */

                       "(30.01.2025)",
/*                    _______________                               */

/* _______________________GUESTS___________________________________ */

  "11:30 am", "Simon Lewis", "Roberts Mart",
  "1:00 pm", "Kathryn Hanson", "Avery",
  "00:00 am", "Name3", "Company",
  "00:00 am", "Name4", "Company"

/* ---------------------------------------------------------------- */
];

var d5 = [
/* -----------------------FRIDAY----------------------------------- */

                       "(31.01.2025)",
/*                    _______________                               */

/* _______________________GUESTS___________________________________ */

  "00:00 am", "Name1", "Company",
  "00:00 am", "Name2", "Company",
  "00:00 am", "Name3", "Company",
  "00:00 am", "Name4", "Company"

/* ---------------------------------------------------------------- */
];




/* document.getElementsByClassName("day1")[0].getElementsByClassName("m1date")[0].innerHTML = d1[0];
document.getElementsByClassName("day2")[0].getElementsByClassName("m1date")[0].innerHTML = d2[0];
document.getElementsByClassName("day3")[0].getElementsByClassName("m1date")[0].innerHTML = d3[0];
document.getElementsByClassName("day4")[0].getElementsByClassName("m1date")[0].innerHTML = d4[0];
document.getElementsByClassName("day5")[0].getElementsByClassName("m1date")[0].innerHTML = d5[0]; */

var x = document.getElementsByClassName("m4");
var y = 1;
var i;
for (i = 0; i < x.length; i++) {
  document.getElementById("line1").getElementsByClassName("m2")[i].innerHTML = d1[y];
  document.getElementById("line1").getElementsByClassName("m4")[i].innerHTML = d1[y+1];
  document.getElementById("line1").getElementsByClassName("m6")[i].innerHTML = d1[y+2];
  document.getElementById("line2").getElementsByClassName("m2")[i].innerHTML = d2[y];
  document.getElementById("line2").getElementsByClassName("m4")[i].innerHTML = d2[y+1];
  document.getElementById("line2").getElementsByClassName("m6")[i].innerHTML = d2[y+2];
  document.getElementById("line3").getElementsByClassName("m2")[i].innerHTML = d3[y];
  document.getElementById("line3").getElementsByClassName("m4")[i].innerHTML = d3[y+1];
  document.getElementById("line3").getElementsByClassName("m6")[i].innerHTML = d3[y+2];
  document.getElementById("line4").getElementsByClassName("m2")[i].innerHTML = d4[y];
  document.getElementById("line4").getElementsByClassName("m4")[i].innerHTML = d4[y+1];
  document.getElementById("line4").getElementsByClassName("m6")[i].innerHTML = d4[y+2];
  document.getElementById("line5").getElementsByClassName("m2")[i].innerHTML = d5[y];
  document.getElementById("line5").getElementsByClassName("m4")[i].innerHTML = d5[y+1];
  document.getElementById("line5").getElementsByClassName("m6")[i].innerHTML = d5[y+2];
  y = y+3;
}
