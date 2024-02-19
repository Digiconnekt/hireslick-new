// sticky header start
window.onload = function () {
  var header = document.querySelector("header");
  var prevScrollPos = window.pageYOffset;
  var sticky = 200;

  window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= sticky && currentScrollPos < prevScrollPos) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
    prevScrollPos = currentScrollPos;
  });
};

// sticky header end
