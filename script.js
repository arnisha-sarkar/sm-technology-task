/* select the element */
const bar = document.getElementById("bar");
const navMenu = document.querySelector(".nav-items");

/* click on the icon */
bar.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
