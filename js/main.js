console.log('IMIN')
$(document).ready(function ($) {
  /*
  basic selector
  */
  $('p').css('border-bottom', '1px solid black')
  $('first').css('border-color', 'red')
  $('#special').css('background-color', '#ffcc00')
  $('p.firrst small').css('background-color', 'lightgrey')

  $('.first').html('Hey you <em>pig</em>')
  $('.first').prepend('<h2>welcome</h2>')
  $('.first').after('<small> make webpages interactive</small>')

  $('#yourName').val('bob builder')

  $('a[href="#1"]').css('background-color','tomato')
  $('a[href="#"]').css('color','grey')
  $('a[href="google"]').css('font-weight','bold')
  //$('.card:first').delay(1000).hide("400s").show(800,function () {alert ('we\'re back')
$('.card').animate({borderRadius:'20px'},400)

$('img:first').attr('src','./img/image-5.jpg')

//console.log($('img:first').hasClass('special'))
//$('img').addClass('special')
$('img').toggleClass('special')

})
