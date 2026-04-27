// for mobile nav humbargar menu
const bar = document.getElementById("bar");
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector(".nav-items");

bar.onclick = () => {
  // open menu bar
  nav.classList.toggle("active");

  // show cross
  if (nav.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
};
