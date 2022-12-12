"use Strict";

// preloader
// ===========================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("set-off");
});

// =================================
// humburger icon
// =================================
$(document).ready(function () {
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });

  // Scroll slowly the dropdown menu
  // ================================================================
  $(".dropdown").on("show.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop().slideDown();
  });

  $(".dropdown").on("hide.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop().slideUp();
  });

  // fixed navbar on scroll
  // ============================================
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 27) {
      $(".navbar-light").addClass("fixed-menu");
    } else {
      $(".navbar-light").removeClass("fixed-menu");
    }
  });

  // scroll bact to top
  // =========================================
  if ($("#scroll-to-top").length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $("#scroll-to-top").addClass("show");
        } else {
          $("#scroll-to-top").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $("#scroll-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    });
  }

  // owl-carousel
  // =================
  var owl = $(".program-carousel");

  owl.owlCarousel({
    loop: true,
    autoplay: true,
    items: 3,
    responsiveClass: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        autoplay: false,
        items: 3,
        nav: true,
        navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
        ],
        loop: false,
      },
    },
  });

  // sponsor and volunteer testmonials
  // ========================================
  $(".owl-testimonial").owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 12000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeInUp",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
  });

  $(".owl-children").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dotsEach: 2,
      },
      600: {
        items: 2,
        nav: true,
        navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
        ],
      },
      1000: {
        autoplay: false,
        items: 3,
        nav: true,
        navText: [
          "<div class='nav-btn prev-slide'></div>",
          "<div class='nav-btn next-slide'></div>",
        ],
        loop: false,
      },
    },
  });

  // Sponsor form
  // ====================================
  $("#sponsorship-form").submit(function () {
    var action = $(this).attr("action");
    $("#message").slideUp(750, function () {
      $("#message").hide();
      $("#submit")
        .after('<img src="media/images/ajax-loader.gif" class="loader">')
        .attr("disabled", "disabled");
      $.post(
        action,
        {
          first_name: $("#first_name").val(),
          last_name: $("#last_name").val(),
          email: $("#email").val(),
          address: $("#address").val(),
          children_total: $("#children_total").val(),
          children_chosen: $("#children_chosen").val(),
          comments: $("#comments").val(),
          verify: $("#verify").val(),
        },
        function (data) {
          document.getElementById("message").innerHTML = data;
          $("#message").slideDown("slow");
          $("#sponsorship-form img.loader").fadeOut("slow", function () {
            $(this).remove();
          });
          $("#submit").removeAttr("disabled");
          if (data.match("success") != null)
            $("#sponsorship-form").slideUp("slow");
        }
      );
    });
    return false;
  });

  $(".child-button").on("click", function () {
    var card = $(this).parents(".card").first();
    var slider = card.find(".children-details");
    slider.slideToggle();
  });

  baguetteBox.run(".no-gutters", {
    buttons: "auto",
    async: true,
  });

  // Volunteer form
  // ====================================
  $(function () {
    $('input[name="daterange"]').daterangepicker(
      {
        locale: {
          format: "DD-MM-YYYY",
        },

        startDate: moment(),
        endDate: moment(),
        opens: "center",
      },
      function (start, end, label) {}
    );
  });

  $("#volunteer-form").submit(function () {
    var action = $(this).attr("action");
    $("#message").slideUp(750, function () {
      $("#message").hide();
      $("#submit")
        .after('<img src="media/images/ajax-loader.gif" class="loader">')
        .attr("disabled", "disabled");
      $.post(
        action,
        {
          first_name: $("#first_name").val(),
          last_name: $("#last_name").val(),
          email: $("#email").val(),
          date_chosen: $("#date_chosen").val(),
          project_chosen: $("#project_chosen").val(),
          comments: $("#comments").val(),
          verify: $("#verify").val(),
        },
        function (data) {
          document.getElementById("message").innerHTML = data;
          $("#message").slideDown("slow");
          $("#volunteer-form img.loader").fadeOut("slow", function () {
            $(this).remove();
          });
          $("#submit").removeAttr("disabled");
          if (data.match("success") != null)
            $("#volunteer-form").slideUp("slow");
        }
      );
    });
    return false;
  });

  // Visitation form
  // ====================================
  $("#visitor-form").submit(function () {
    var action = $(this).attr("action");
    $("#message").slideUp(750, function () {
      $("#message").hide();
      $("#submit")
        .after('<img src="media/images/ajax-loader.gif" class="loader">')
        .attr("disabled", "disabled");
      $.post(
        action,
        {
          first_name: $("#first_name").val(),
          last_name: $("#last_name").val(),
          email: $("#email").val(),
          date_chosen: $("#date_chosen").val(),
          phone: $("#phone").val(),
          total_visitors: $("#total_visitors").val(),
          team: $("#team").val(),
          comments: $("#comments").val(),
          verify: $("#verify").val(),
        },
        function (data) {
          document.getElementById("message").innerHTML = data;
          $("#message").slideDown("slow");
          $("#visitor-form img.loader").fadeOut("slow", function () {
            $(this).remove();
          });
          $("#submit").removeAttr("disabled");
          if (data.match("success") != null) $("#visitor-form").slideUp("slow");
        }
      );
    });
    return false;
  });

  // Contact form
  // =================================================
  $("#contact-form").submit(function () {
    var action = $(this).attr("action");
    $("#message").slideUp(750, function () {
      $("#message").hide();
      $("#submit")
        .after('<img src="media/images/ajax-loader.gif" class="loader">')
        .attr("disabled", "disabled");
      $.post(
        action,
        {
          first_name: $("#first_name").val(),
          last_name: $("#last_name").val(),
          email: $("#email").val(),
          phone: $("#phone").val(),
          comments: $("#comments").val(),
          verify: $("#verify").val(),
        },
        function (data) {
          document.getElementById("message").innerHTML = data;
          $("#message").slideDown("slow");
          $("#contact-form img.loader").fadeOut("slow", function () {
            $(this).remove();
          });
          $("#submit").removeAttr("disabled");
          if (data.match("success") != null) $("#contact-form").slideUp("slow");
        }
      );
    });
    return false;
  });

  $("a.to-donate").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        2000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
      return false;
    } // End if
  });

  // progress on donation
  // ===========================
  $("#bar1").barfiller({ barColor: "#b2d847", duration: 1500 });
});

// =================================
// Swiper Slide
// =================================
var swiper = new Swiper(".main-swiper-container", {
  loop: true,
  direction: "horizontal",
  autoplay: {
    delay: 7000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      $(".slide_info").hide(0);
      $(".slide_info").removeClass("aos-init").removeClass("aos-animate");
    },
    slideChangeTransitionEnd: function () {
      $(".slide_info").show(0);
      AOS.init();
    },
  },
});

var progranSwiper = new Swiper(".page-swiper-gallery", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  autoplay: true,
  zoom: {
    maxRatio: 5,
    toggle: true,
  },
  speed: 2000,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 80,
    stretch: 20,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

AOS.init();
