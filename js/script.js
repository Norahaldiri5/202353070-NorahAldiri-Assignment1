const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", function () {

   document.body.classList.toggle("light-mode");

   if (document.body.classList.contains("light-mode")) {

      themeIcon.src = "assets/images/moon.png";

      themeToggle.setAttribute(
         "aria-label",
         "Switch to dark mode"
      );

   }
   else {

      themeIcon.src = "assets/images/sun.png";

      themeToggle.setAttribute(
         "aria-label",
         "Switch to light mode"
      );

   }

});