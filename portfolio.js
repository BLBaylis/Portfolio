//Side nav-bar

function sideNavBar() {

  var navbarClassList = document.getElementById("project-nav-bar").classList;
  var iconClassList1 = document.getElementsByClassName("menu-icon")[0].classList;
  var iconClassList2 = document.getElementsByClassName("menu-icon")[2].classList;

  function openNav() {
    navbarClassList.add("nav-animate");
    document.getElementsByClassName("menu-icon-container")[0].style.display = "initial";
    document.getElementsByClassName("menu-icon")[1].style.display = "none";
    iconClassList1.add("menu-icon-animate1");
    iconClassList2.add("menu-icon-animate2");
    open = true;
  }


  function closeNav() {
    navbarClassList.remove("nav-animate");
    document.getElementsByClassName("menu-icon-container")[0].style.display = "flex";
    document.getElementsByClassName("menu-icon")[1].style.display = "initial";
    iconClassList1.remove("menu-icon-animate1");
    iconClassList2.remove("menu-icon-animate2");
    open = false;
  }

  if (!open){
    openNav();
  } else {
    closeNav();

  }
}

function scroll () {
  window.scrollBy(0, 1000);
}

  var open = false;


function activeBtn (btn) {
  var arr = document.getElementsByClassName("project-nav-item");
  for (var i = 0; i < arr.length; i++){
    arr[i].id = "";
  }
  btn.id = "activeBtn";
}

function calcOpen() {
  var scaleFactor = 1.5;
  var projectsHeight = 93.75 * scaleFactor + "%";
  var subheadingHeight = 12.5 * 1/scaleFactor + "%";
  var containerHeight = 33 * 1/scaleFactor + "%";
  document.getElementsByClassName("personal-projects")[0].style.height = projectsHeight;
  document.getElementsByClassName("sub-heading")[1].style.height = subheadingHeight;
  document.getElementsByClassName("calculator-main")[0].style.height = "50%";
  for (var i = 0; i < document.getElementsByClassName("container").length; i++){
    document.getElementsByClassName("container")[i].style.height = containerHeight;
  }
}

function calcClose() {
  var scaleFactor = 1;
  var projectsHeight = 93.75 * scaleFactor + "%";
  var subheadingHeight = 12.5 * 1/scaleFactor + "%";
  var containerHeight = 33 * 1/scaleFactor + "%";
  document.getElementsByClassName("personal-projects")[0].style.height = projectsHeight;
  document.getElementsByClassName("sub-heading")[1].style.height = subheadingHeight;
  document.getElementsByClassName("calculator-main")[0].style.height = "0%";
  for (var i = 0; i < document.getElementsByClassName("container").length; i++){
    document.getElementsByClassName("container")[i].style.height = containerHeight;
  }
}