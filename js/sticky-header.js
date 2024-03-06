// Sticky header start
window.onload = function () {
  var header = document.querySelector("header");
  var sticky = 200;

  function updateHeaderSticky() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  window.addEventListener("scroll", updateHeaderSticky);

  // Add "sticky" class when menu button is clicked
  var menuButton = document.querySelector(".navbar-toggler");
  menuButton.addEventListener("click", function () {
    if (!header.classList.contains("sticky")) {
      header.classList.add("sticky");
    }
  });

  // Ensure header is sticky on page load
  updateHeaderSticky();
};
// Sticky header end
