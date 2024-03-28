

function toggleMenu() {
  var menu = document.getElementById("menu");
  var bar = document.getElementById("bar");
  var close = document.getElementById("close");

  if (menu.style.display==="flex"){
    menu.style.display="none";
    bar.style.display="flex";
    close.style.display="none";
  }else{
    menu.style.display="flex"
    bar.style.display="none";
    close.style.display="flex";
  }
  document.addEventListener("click", function(event){
    let isClickInsideDiv = menu.contains(event.target) || bar.contains(event.target) || close.contains(event.target);
    if(!isClickInsideDiv){
      close.style.display="none";
      bar.style.display="flex";
      menu.style.display="none"
    }
  });
  


}


function large() {
  let emailDiv = document.querySelector(".input-btn");
  emailDiv.classList.toggle("in-btn-click");
}

function small() {
  let emailDiv = document.querySelector(".input-btn");
  emailDiv.classList.add("in-btn-click-out");
}

document.addEventListener("DOMContentLoaded", function () {
  let mainBar = document.querySelector("#dot-icon");
  let menuBar = document.querySelector("#js-nav");

  mainBar.addEventListener("click", function () {
    if (menuBar.style.display === "flex") {
      menuBar.style.display = "none";
    } else {
      menuBar.style.display = "flex";
    }
  });

  document.addEventListener("click", function (event) {
    let isClickInside =
      menuBar.contains(event.target) || mainBar.contains(event.target);

    if (!isClickInside) {
      menuBar.style.display = "none";
    }

  });

});

let searchIcon = document.querySelector(".search");

searchIcon.addEventListener("click",()=>{
  let searchbar = document.querySelector(".search-bar-appear");
  searchbar.style.display="flex";
  searchbar.classList.add("bodyClass");
  document.body.style.overflow = 'hidden'
})


  let btnClose = document.querySelector(".cancle-icon");
  btnClose.addEventListener("click",()=>{
    let searchbar = document.querySelector(".search-bar-appear");

    searchbar.style.display="none";
    searchbar.classList.add("bodyClass");
    document.body.style.overflow = 'auto'; 
  })
function forAllNormie(){
  let searchIcon = document.querySelector(".search");

searchIcon.addEventListener("click",()=>{
  let searchbar = document.querySelector(".search-bar-appear");
  searchbar.style.display="flex";
  searchbar.classList.add("bodyClass");
  document.body.style.overflow = 'hidden'
})


  let btnClose = document.querySelector(".cancle-icon");
  btnClose.addEventListener("click",()=>{
    let searchbar = document.querySelector(".search-bar-appear");

    searchbar.style.display="none";
    searchbar.classList.add("bodyClass");
    document.body.style.overflow = 'auto'; 
  })
}