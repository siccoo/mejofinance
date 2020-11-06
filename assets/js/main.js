const navSLide = () => {
  const menu = document.querySelector(".hamburger");
  const nav = document.querySelector(".navbar-ul");

  //get the hamburger image element
  const hamImg = document.querySelector("#hamburger-toggle");

  //add an onclick event to the hamburger button
  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //toggle hamburger image element when the nav is active
    nav.classList.contains("nav-active")
      ? (hamImg.src = "assets/images/icon-close.svg")
      : (hamImg.src = "assets/images/icon-hamburger.svg");
  });
};

navSLide();
