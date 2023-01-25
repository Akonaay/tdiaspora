$(function() {
  /*===================================*
	01. MENU JS
	*===================================*/
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 90) {
      $("#site-header").addClass("nav-fixed");
    } else {
      $("#site-header").removeClass("nav-fixed");
    }
  });

  //Main navigation Active Class Add Remove
  $(".navbar-toggler").on("click", function() {
    $("header").toggleClass("active");

    var scroll = $(window).scrollTop();

    if (scroll <= 90) {
      $("header").addClass("bg-dark");
      // $("unlink").addClass("text-black-1");
    } else {
      $("header").removeClass("bg-dark");
     
    }
  });

  $(document).on("ready", function() {
    if ($(window).width() > 991) {
      $("header").removeClass("active");
    }
    $(window).on("resize", function() {
      if ($(window).width() > 991) {
        $("header").removeClass("active");
      }
    });
  });
});


$('#vertical-carousel').on('mousewheel DOMMouseScroll', function (e) {
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        $(this).carousel('prev');
    }
    else {
        $(this).carousel('next');
    }
    e.preventDefault();
});

$("#vertical-carousel").on("touchstart", function (event) {
    var yTouchPointStart = event.originalEvent.touches[0].pageY;
    $(this).on("touchmove", function (event) {
        var yTouchPointEnd = event.originalEvent.touches[0].pageY;
        if (Math.floor(yTouchPointStart - yTouchPointEnd) > 1) {
            $(".carousel").carousel('next');
        }
        else if (Math.floor(yTouchPointStart - yTouchPointEnd) < -1) {
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
    event.preventDefault();
});
