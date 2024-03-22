function show() {
  let icon = document.querySelector(".icon-nav");
  icon.classList.toggle("nva-icon");
}
// function showMenu() {
//     let menu = document.querySelector(".side-menu");
//     if (menu.style.display === "flex") {
//         menu.style.display = "none";
//     } else {
//         menu.style.display = "flex";
//     }
// }

function toggleMenu() {
  var menu = document.getElementById("menu");
  var bar = document.getElementById("bar");
  var close = document.getElementById("close");

  // Toggle visibility of the menu
  if (menu.classList.contains("visible")) {
    menu.classList.remove("visible");
    bar.style.display = "block"; // Show the bar symbol
    close.style.display = "none"; // Hide the close symbol
  } else {
    menu.classList.add("visible");
    bar.style.display = "none"; // Hide the bar symbol
    close.style.display = "block"; // Show the close symbol
  }
}
function large() {
  let emailDiv = document.querySelector(".input-btn");
  emailDiv.classList.toggle("in-btn-click");
}

function small() {
  let emailDiv = document.querySelector(".input-btn");
  emailDiv.classList.add("in-btn-click-out");
}

