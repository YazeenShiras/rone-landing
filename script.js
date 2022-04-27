function myFunction() {
  document.getElementById("myDropdown").style.display = "block";
  document.getElementById("myDropdown2").style.display = "none";
  document.getElementById("myDropdown3").style.display = "none";
  document.getElementById("myDropdown4").style.display = "none";
}

function products() {
  document.getElementById("myDropdown").style.display = "none";
  document.getElementById("myDropdown2").style.display = "block";
  document.getElementById("myDropdown3").style.display = "none";
  document.getElementById("myDropdown4").style.display = "none";
}

function about() {
  document.getElementById("myDropdown3").style.display = "block";
  document.getElementById("myDropdown").style.display = "none";
  document.getElementById("myDropdown2").style.display = "none";
  document.getElementById("myDropdown4").style.display = "none";
}

function comingSoon() {
  document.getElementById("myDropdown4").style.display = "block";
  document.getElementById("myDropdown").style.display = "none";
  document.getElementById("myDropdown2").style.display = "none";
  document.getElementById("myDropdown3").style.display = "none";
}

function mouseleave() {
  document.getElementById("myDropdown4").style.display = "none";
  document.getElementById("myDropdown").style.display = "none";
  document.getElementById("myDropdown2").style.display = "none";
  document.getElementById("myDropdown3").style.display = "none";
}

function menuOpen() {
  document.getElementById("navMobile").style.display = "flex";
}

function menuClose() {
  document.getElementById("navMobile").style.display = "none";
}

function featuresMobNav() {
  if (
    document.getElementById("featureDropdownMobNav").style.display === "none"
  ) {
    document.getElementById("sortDownFeatures").style.display = "none";
    document.getElementById("sortUpFeatures").style.display = "block";
    document.getElementById("featureDropdownMobNav").style.display = "flex";
  } else {
    document.getElementById("sortDownFeatures").style.display = "block";
    document.getElementById("sortUpFeatures").style.display = "none";
    document.getElementById("featureDropdownMobNav").style.display = "none";
  }
}

function productsMobNav() {
  if (document.getElementById("sortUpProducts").style.display === "none") {
    document.getElementById("sortDownProducts").style.display = "none";
    document.getElementById("sortUpProducts").style.display = "block";
    document.getElementById("productsDropdownMobNav").style.display = "flex";
  } else {
    document.getElementById("sortDownProducts").style.display = "block";
    document.getElementById("sortUpProducts").style.display = "none";
    document.getElementById("productsDropdownMobNav").style.display = "none";
  }
}

function aboutMobNav() {
  if (document.getElementById("aboutDropdownMobNav").style.display === "none") {
    document.getElementById("sortDownAbout").style.display = "none";
    document.getElementById("sortUpAbout").style.display = "block";
    document.getElementById("aboutDropdownMobNav").style.display = "flex";
  } else {
    document.getElementById("sortDownAbout").style.display = "block";
    document.getElementById("sortUpAbout").style.display = "none";
    document.getElementById("aboutDropdownMobNav").style.display = "none";
  }
}

function comingSoonMobNav() {
  if (
    document.getElementById("comingSoonDropdownMobNav").style.display === "none"
  ) {
    document.getElementById("sortDownComingSoon").style.display = "none";
    document.getElementById("sortUpComingSoon").style.display = "block";
    document.getElementById("comingSoonDropdownMobNav").style.display = "flex";
  } else {
    document.getElementById("sortDownComingSoon").style.display = "block";
    document.getElementById("sortUpComingSoon").style.display = "none";
    document.getElementById("comingSoonDropdownMobNav").style.display = "none";
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
