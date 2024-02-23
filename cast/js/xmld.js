  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction3b(this);
    }
  };

  xhttp.open("GET", "xml/guests.xml", true);
  xhttp.send();

  function myFunction3b(xml) {	
    var xmlDoc = xml.responseXML;
    var d1 = xmlDoc.getElementsByTagName("monday");
    document.getElementById("line1").getElementsByClassName("m4")[0].innerHTML = d1[0].childNodes[0].childNodes[0].nodeValue;
  }
myFunction3b(xml);

// Choose data from XML document.
function myFunction2(c) {

  var y = document.getElementsByTagName("button");	

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction3(this);
    }
  };
  xhttp.open("GET", "xml/guests.xml", true);
  xhttp.send();
	
  function myFunction3(xml) {
    var xmlDoc = xml.responseXML;
    var x1 = xmlDoc.getElementsByTagName("name");
    var x2 = xmlDoc.getElementsByTagName("position");
    var x3 = xmlDoc.getElementsByTagName("tel");
    var x4 = xmlDoc.getElementsByTagName("mail");
    var w = xmlDoc.getElementsByTagName("wales");
    for (i = 0; i < y.length; i++) {
      var z = y[i+1]; // Because I already have one "button" element.
      if (z.id === c) { 
    document.getElementById("name").innerHTML = x1[i].childNodes[0].nodeValue;
    document.getElementById("position").innerHTML = x2[i].childNodes[0].nodeValue;
    document.getElementById("tel").innerHTML = x3[i].childNodes[0].nodeValue;
   } 	
  }
 }
}