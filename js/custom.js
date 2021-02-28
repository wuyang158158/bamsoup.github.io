/* jQuery Preloader
  -----------------------------------------------*/
// $(window).load(function () {
//   $('.preloader').fadeOut(1000) // set duration in brackets
// })

let isFlag = true
$(function () {
  FastClick.attach(document.body)
  $('.preloader').fadeOut(1000) // set duration in brackets
  $('.navbar-right li a').click((e) => {
    if (isFlag) {
      isFlag = false
      setTimeout(() => {
        $('.collapse').collapse('hide')
        isFlag = true
      }, 1500)
    }
  })
  // setTimeout(()=>{
  //   jqI18nProperties(navLanguage);
  //
  // },500)
  // The selector language
  $('#nav-dropdown').mouseover(function () {
    $(this).children('ul').show()
  })
  $('#nav-dropdown').mouseout(function () {
    $(this).children('ul').hide()
  })

  $('#nav-dropdown').click(function () {
    $(this).children('ul').toggle()
  })

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  /* jQuery to collapse the navbar on scroll
    -----------------------------------------------*/
  // $(window).scroll(function () {
  //   if ($('.navbar').offset().top > 50) {
  //     $('.navbar-fixed-top').addClass('top-nav-collapse')
  //   } else {
  //     $('.navbar-fixed-top').removeClass('top-nav-collapse')
  //   }
  // })

  /* BxSlider
    -----------------------------------------------*/
  ;(function (window, $) {
    'use strict'

    // Cache document for fast access.
    var document = window.document

    function mainSlider() {
      $('.bxslider').bxSlider({
      auto: false,
      infiniteLoop: false,
      controls: false,
        pagerCustom: '#bx-pager',
        mode: 'fade',
        nextText: '',
        prevText: ''
      });
    }

    mainSlider();

    var $links = $('.bx-wrapper .bx-controls-direction a, #bx-pager a')
    $links.click(function () {
      $('.slider-caption').removeClass('animated fadeInLeft')
      $('.slider-caption').addClass('animated fadeInLeft')
    })

    $('.bx-controls').addClass('container')
    $('.bx-next').addClass('fa fa-angle-right')
    $('.bx-prev').addClass('fa fa-angle-left')
  })(window, jQuery)

  /* Owl Carousel
    -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-work").owlCarousel({
      autoPlay: 3000,
      items : 4,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,4],
    });
  });

  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#ct1').parallax('100%', 0.2)
    $('#ct2').parallax('100%', 0.3)
    $('#ct6').parallax('100%', 0.4)
    $('#portfolio').parallax('100%', 0.1)
    $('#plan').parallax('100%', 0.3)
    $('#contact').parallax('100%', 0.2)
  }
  initParallax()

  /* Nivo lightbox
    -----------------------------------------------*/
  $('#portfolio .col-md-4 a').nivoLightbox({
    effect: 'fadeScale',
  })

  /* wow
  -------------------------------*/
  new WOW({ mobile: true }).init()
})
