  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction3b(this);
    }
  };

  xhttp.open("GET", "xml/guests.xml", true);
  xhttp.send();
  
  var x = document.getElementsByClassName("m4")

  function myFunction3b(xml) {	
    var xmlDoc = xml.responseXML;
    var d1 = xmlDoc.getElementsByTagName("monday");
    var y = 1;
    for (i = 0; i < x.length; i++) {
    document.getElementById("line1").getElementsByClassName("m4")[i].innerHTML = d1[0].childNodes[y].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("line1").getElementsByClassName("m6")[i].innerHTML = d1[0].childNodes[y].childNodes[3].childNodes[0].nodeValue;
    document.getElementById("line1").getElementsByClassName("m2")[i].innerHTML = d1[0].childNodes[y].childNodes[5].childNodes[0].nodeValue;
    y = y+2;
    }
  }

myFunction3b(xml);