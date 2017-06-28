( function($) {

  $(document).ready(function() {

    $("#starfleet").click(function() {
      $("#starfleet").toggleClass("feature-animation-one");
      $("#starfleet").toggleClass("animation-one");
      $("body").toggleClass("starfleet-bg");
      $("#klingon").toggleClass("no-visibility");
    });
    $("#klingon").click(function() {
      $("#klingon").toggleClass("feature-animation-two");
      $("#klingon").toggleClass("animation-two");
      $("body").toggleClass("klingon-bg");
      $("#starfleet").toggleClass("no-visibility");
    });



  });
  // END (D)R(F)
})(jQuery);
// END JQUERY BODYGUARD
