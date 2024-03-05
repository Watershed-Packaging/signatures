function myFunction() {
const div1 = document.createElement("div");
div1.className = "right1";
const span1 = document.createElement("span");
span1.className = "m2 font italic";
const span2 = document.createElement("span");
span2.className = "m3 font italic";
const div2 = document.createElement("div");
div2.className = "right2";
const span3 = document.createElement("span");
span3.className = "m4 font italic";

const textnode1 = document.createTextNode("8.00 am");
const textnode2 = document.createTextNode("-");
const textnode3 = document.createTextNode("Customer Name from Company Name");

div1.appendChild(span1);
span1.appendChild(textnode1);
span2.appendChild(textnode2);
div2.appendChild(span3);
span3.appendChild(textnode3);

document.getElementById("line1").appendChild(div1);
document.getElementById("line1").appendChild(span2);
document.getElementById("line1").appendChild(div2);
}