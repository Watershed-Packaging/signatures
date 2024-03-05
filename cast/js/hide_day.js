function hide_day(u) {
  var i;
  var y = document.getElementsByClassName('day');
  var b = document.getElementsByTagName("button");
  for (i = 0; i < b.length; i++) {
  if (b[i].id === u) {
  var x = document.getElementsByClassName(u);
  for (i = 0; i < y.length; i++) {
     x[i].style.display = 'none';
   }
  }
 }
}