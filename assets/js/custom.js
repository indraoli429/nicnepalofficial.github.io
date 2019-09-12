/*Custom JavaScript*/

$(function(){
  // Activate wow.js
  new WOW().init();

  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
  $('#nurturing-projects').animateNumber(
    {
      number: 21,
      color: '#d33824',
      numberStep: comma_separator_number_step
    },
    {
      easing: 'swing',
      duration: 1500
    }
  )
  $('#nearly-complete-projects').animateNumber(
    {
      number: 5,
      color: '#d33824',
      numberStep: comma_separator_number_step
    },
    {
      easing: 'swing',
      duration: 1000
    }
  )

  if (location.pathname == "/" || location.pathname == "/gallery/") {
    $('.gallery a').simpleLightbox();
  } 

  if (location.pathname == "/") {
    var typed = new Typed(".typed", {
      strings: ["is with you.", "goal is to develop Nepal economically."],
      typeSpeed: 40,
      startDelay: 500,
      backSpeed: 50
    });
  }
});

