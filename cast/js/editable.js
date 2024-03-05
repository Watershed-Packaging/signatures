var x = document.getElementsByClassName("m4");

var i;
for (i = 0; i < x.length; i++) {
  document.getElementsByClassName("m2")[i].contentEditable = true;
  document.getElementsByClassName("m4")[i].contentEditable = true;
  document.getElementsByClassName("m6")[i].contentEditable = true
}
for (i = 0; i < x.length; i++) {
  document.getElementsByClassName("m1date")[i].contentEditable = true;
}