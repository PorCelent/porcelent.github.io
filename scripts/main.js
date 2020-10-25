$(document).ready(function () {
  $(".dropdown").hover(
    //   mouseEnter
    function () {
      if ($(".dropdown-items").is(":visible")) return;

      $(".dropdown-items").slideDown(250);
    },
    // mouseLeave
    function () {
      $(".dropdown-items").slideUp(250);
    }
  );

  $("#navbar").hover(
    // mouseEnter
    function () {},
    // mouseLeave
    function () {}
  );
});
