// nav hide
// let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(function (a) {
//   a.addEventListener("click", function () {
//     navCollapse.classList.remove("show");
//   });
// });

(function ($) {
  $(document).ready(function () {
    $("ul.dropdown-menu [data-toggle=dropdown]").on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).parent().siblings().removeClass("open");
      $(this).parent().toggleClass("open");
    });
  });
})(jQuery);
