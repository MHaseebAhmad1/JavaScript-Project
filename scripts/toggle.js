function navtoggler() {
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("toggle");
  if (nav.className === "" && toggle.className === "") {
    nav.className += "navMenuResponsive";
    toggle.className += "on";
  } else {
    nav.className = "";
    toggle.className = "";
  }
}
function planDurationSwitch(a) {
  if (a.checked == true) { 
    document.getElementById("api_Plans_Monthly").style.display = "none"; 
    document.getElementById("api_Plans_Yearly").style.display = "block";
  }
  else { 
    document.getElementById("api_Plans_Yearly").style.display = "none"; 
    document.getElementById("api_Plans_Monthly").style.display = "block"; 
  }
}