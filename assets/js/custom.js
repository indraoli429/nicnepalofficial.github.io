/*Custom JavaScript*/

$(function(){
  var typed = new Typed(".typed", {
    strings: ["is with you.", "goal is to build economically developed Nepal."],
    typeSpeed: 40,
    startDelay: 500,
    backSpeed: 50
  });

  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
  $('#donation-amount').animateNumber(
    {
      number: 71154825,
      color: '#d33824',
      numberStep: comma_separator_number_step
    },
    {
      easing: 'swing',
      duration: 1500
    }
  )
});

