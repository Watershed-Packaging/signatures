//Toggle between avatars.
function swap(c) {
  var i;
  var p = document.getElementById("pic");
  var y = document.getElementsByTagName("button");
  var logo = "employees/assets/avatars/placeholder.png";
  var ab = "employees/assets/avatars/AnoushkaBlakeman.png";
  var cr = "employees/assets/avatars/ChrisRansome.png";
  var ch = "employees/assets/avatars/ClaireHarrison.png";
  var dw = "employees/assets/avatars/DanielWaters.png";
  var db = "employees/assets/avatars/DavidBurton.png";
  var em = "employees/assets/avatars/EviMcNally.png";
  var kw = "employees/assets/avatars/KarinaWaters.png";
  var ny = "employees/assets/avatars/NatashaYoung.png";
  var rw = "employees/assets/avatars/RebeccaWillis.png";
  var sbb = "employees/assets/avatars/SophieBullen-Brown.png";
  var wk = "employees/assets/avatars/WitoldKrzysztofek.png";
  const pics = [logo, logo, ab, cr, ch, dw, logo, db, logo, logo, em, logo, logo, logo, kw, logo, logo, logo, logo, logo, logo, ny, logo, logo, logo, logo, logo, rw, sbb, logo, logo, logo, logo, wk];
  for (i = 0; i < y.length; i++) {
      var z = y[i+1]; // Because I already have one "button" element.
      if (z.id === c) {
        p.src = pics[i];
    }
  }
}