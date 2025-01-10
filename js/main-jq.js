$(document).ready(function() {

  // // vanilla JS
  // // document.getElementById('text').innerHTML = 'This is now my text';
  // $('#text').html('This is now my text'); //jquery

  // // vanilla JS
  // // document.getElementsByClassName('my-input')[0].value = 'New Input Value';
  // $('.my-input').val('New Input Value'); //jquery

  // var el = document.getElementById('text');

  // console.log("EL in Vanilla JS:", el);
  // console.log("EL in jQuery:", $(el));

  // $('#go-button').on('click', function() {
  //   console.log('Button clicked');
  // });

  $('[data-trigger="dropdown"]').on('mouseenter', function() {
    var submenu = $(this).parent().find('.submenu');
    submenu.fadeIn(300);

    $('.profile-menu').on('mouseleave', function() {
      submenu.fadeOut(300);
    });
  })
});

