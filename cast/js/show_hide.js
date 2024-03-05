function show_hide(u) {
/*  var x = document.getElementsByTagName("button");
  var d1g1 = document.getElementsByClassName('day1')[0].getElementsByClassName('l1');
  var d1g2 = document.getElementsByClassName('day1')[0].getElementsByClassName('l2');
  var i;
  for (i = 0; i < x.length; i++) {
  var y = x[i];
  if (y.id === c) {
  for (i = 0; i < d1g1.length; i++) {
  if (d1g1[i].style.display === 'none') {
    d1g1[i].style.display = 'inline-block';
  } else {
    d1g1[i].style.display = 'none';
  }
 }
}
}. ----  if (b.id === x.className) {
}*/

  var i;
  var y = document.getElementsByClassName('m4');
  var b = document.getElementsByTagName("button");
  for (i = 0; i < b.length; i++) {
  if (b[i].id === u) {
  var a = b[i].className;
  var x = document.getElementsByClassName(u)[0].getElementsByClassName(a);
  for (i = 0; i < y.length; i++) {
     x[i].style.display = 'none';
   }
  }
 }
}