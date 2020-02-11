
//hamburger menu
function clickFunction() {
  var x = document.getElementById("topNav");
  if (x.className === "head__nav") {
    x.className += " responsive";
  } else {
     x.className = "head__nav";
  }
}
