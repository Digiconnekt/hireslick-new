// sticky header start
window.onload = function () {
  var navbar = document.querySelector("header");
  var prevScrollPos = window.pageYOffset;
  var sticky = 200;

  window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= sticky && currentScrollPos < prevScrollPos) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
    prevScrollPos = currentScrollPos;
  });
};

// sticky header end
