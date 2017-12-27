//Main Nav Bar

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("dropdown-links-div").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {

    var dropdowns = document.getElementsByClassName("dropdown-links-div");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Side nav-bar

function sideNavBar() {

  function openNav() {
    document.getElementById("project-nav-bar").style.left = "0";
    document.getElementsByClassName("menu-open-icon")[0].style.display = "none";
    document.getElementsByClassName("menu-open-icon")[1].style.display = "none";
    document.getElementsByClassName("menu-open-icon")[2].style.display = "none";
    document.getElementsByClassName("menu-close-icon")[0].style.display = "initial";
    open = true;
  }


  function closeNav() {
    document.getElementById("project-nav-bar").style.left = "-33%";
    document.getElementsByClassName("menu-open-icon")[0].style.display = "flex";
    document.getElementsByClassName("menu-open-icon")[1].style.display = "flex";
    document.getElementsByClassName("menu-open-icon")[2].style.display = "flex";
    document.getElementsByClassName("menu-close-icon")[0].style.display = "none";
    open = false;
  }

  if (!open){
    console.log(open);
    openNav();
    console.log(open);
  } else {
    console.log(open);
    closeNav();
    console.log(open);
  }

}

var open = false;

function activeBtn (btn) {
  var arr = document.getElementsByClassName("project-nav-item");
  for (var i = 0; i < arr.length; i++){
    arr[i].id = "";
  }
  btn.id = "activeBtn";
}