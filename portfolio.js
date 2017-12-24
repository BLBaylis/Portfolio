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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

function sideNavBar() {

  function openNav() {
    document.getElementById("project-nav-bar").style.left = "0";
    open = true;
  }

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("project-nav-bar").style.left = "-33%";
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