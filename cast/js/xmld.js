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
    var d2 = xmlDoc.getElementsByTagName("tuesday");
    var d3 = xmlDoc.getElementsByTagName("wednesday");
    var d4 = xmlDoc.getElementsByTagName("thursday");
    var d5 = xmlDoc.getElementsByTagName("friday");
    var y = 1;

    do {
    
    document.getElementById("line1").getElementsByClassName("m4")[i].innerHTML = d1[0].childNodes[y].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("line1").getElementsByClassName("m6")[i].innerHTML = d1[0].childNodes[y].childNodes[3].childNodes[0].nodeValue;
    document.getElementById("line1").getElementsByClassName("m2")[i].innerHTML = d1[0].childNodes[y].childNodes[5].childNodes[0].nodeValue;

    document.getElementById("line2").getElementsByClassName("m4")[i].innerHTML = d2[0].childNodes[y].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("line2").getElementsByClassName("m6")[i].innerHTML = d2[0].childNodes[y].childNodes[3].childNodes[0].nodeValue;
    document.getElementById("line2").getElementsByClassName("m2")[i].innerHTML = d2[0].childNodes[y].childNodes[5].childNodes[0].nodeValue;

    document.getElementById("line3").getElementsByClassName("m4")[i].innerHTML = d3[0].childNodes[y].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("line3").getElementsByClassName("m6")[i].innerHTML = d3[0].childNodes[y].childNodes[3].childNodes[0].nodeValue;
    document.getElementById("line3").getElementsByClassName("m2")[i].innerHTML = d3[0].childNodes[y].childNodes[5].childNodes[0].nodeValue;

    document.getElementById("line4").getElementsByClassName("m4")[i].innerHTML = d4[0].childNodes[y].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("line4").getElementsByClassName("m6")[i].innerHTML = d4[0].childNodes[y].childNodes[3].childNodes[0].nodeValue;
    document.getElementById("line4").getElementsByClassName("m2")[i].innerHTML = d4[0].childNodes[y].childNodes[5].childNodes[0].nodeValue;

    document.getElementById("line5").getElementsByClassName("m4")[i].innerHTML = d5[0].childNodes[y].childNodes[1].childNodes[0].nodeValue;
    document.getElementById("line5").getElementsByClassName("m6")[i].innerHTML = d5[0].childNodes[y].childNodes[3].childNodes[0].nodeValue;
    document.getElementById("line5").getElementsByClassName("m2")[i].innerHTML = d5[0].childNodes[y].childNodes[5].childNodes[0].nodeValue;

    i++;

    y = y+2;

    }

    while (i < x.length);

  }

myFunction3b(xml);