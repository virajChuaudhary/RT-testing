jQuery(document).ready(function () {
  // dropdown on hover
  $("header .dropdown").hover(function () {
    var isHovered = jQuery(this).is(":hover");
    if (isHovered) {
      $(this).children(".dropdown-menu").addClass("show");
      $(".dropdown-toggle", this).attr("aria-expanded", "true");
    } else {
      $(this).children(".dropdown-menu").removeClass("show");
      $(".dropdown-toggle", this).attr("aria-expanded", "false");
    }
  });
  // dropdown on hover


  // what our client says slider
  $("#wocs").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    draggable: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 8000,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 8000,
          adaptiveHeight: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  // what our client says slider

  // smooth scrool

  $(document).on("click", 'a[href^="#"]:not([href="#"])', function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 200,
      },
      250
    );
  });

  //   smooth scrol
  // counter section

  var counted = 0;
  $(window).scroll(function () {
    if ($("section#counter").length) {
      var oTop = $("section#counter").offset().top - window.innerHeight;

      if (counted == 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },

            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              },
            }
          );
        });
        counted = 1;
      }
    }
  });
  // counter section

  // faq section
  $(".links a").on("click", function () {
    var linkvalue = $(this).attr("href");
    $(this).parents("li").addClass("activated");
    $(this).parents("li").siblings().removeClass("activated");
    var rightSideActivated = $(".faq_col").find(linkvalue);
    rightSideActivated.addClass("activated");
    $(rightSideActivated)
      .find(".faq .question")
      .first()
      .parent()
      .addClass("active");
    $(rightSideActivated)
      .siblings()
      .find(".faq .question")
      .parent()
      .removeClass("active");
    $(".faq_col").find(linkvalue).siblings().removeClass("activated");
  });
  // faq section

  $(".faq_col .faq .question").click(function (event) {
    $(".faq_col .faq .question").not(this).parent().removeClass("active");
    $(this).parent().toggleClass("active");
  });
  if ($(window).width() <= 991) {
    $(".faq_col .faq .question").parent().removeClass("active");
    $(".faq_col .faq .question").first().parent().addClass("active");
    $(this).parent().toggleClass("active");
  }

  // faq section

  // blog load more
  jQuery(function () {
    jQuery(".main_blog_list").slice(0, 5).show().css("display", "flex"),
      jQuery("#loadMore").on("click", function (o) {
        o.preventDefault(),
          jQuery(".main_blog_list:hidden")
            .slice(0, 5)
            .show(300)
            .css("display", "flex"),
          0 == jQuery(".main_blog_list:hidden").length &&
            (jQuery("#load").fadeOut("slow"), jQuery(this).addClass("no-more"));
      });
  });
  // blog load more
  // testimonial load more
  jQuery(function () {
    jQuery(".main_testimonial_list").slice(0, 8).show().css("display", "flex"),
      jQuery("#loadMoretestimonial").on("click", function (o) {
        o.preventDefault(),
          jQuery(".main_testimonial_list:hidden")
            .slice(0, 8)
            .show(300)
            .css("display", "flex"),
          0 == jQuery(".main_testimonial_list:hidden").length &&
            (jQuery("#load").fadeOut("slow"), jQuery(this).addClass("no-more"));
      });
  });
  // testimonial load more
});
