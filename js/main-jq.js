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
  });

  $('#prepend, #append, #replace').on('click', function(e) {
    var el = $(e.currentTarget);
    var action = el.attr('id');

    var content = $('.text').val();

    if (action === 'prepend') {
      console.log('Prepend');
      $('#main').prepend(content);
    } else if (action === 'append') {
      console.log('Append');
      $('#main').append(content);
    } else if (action === 'replace') {
      console.log('Replace');
      $('#main').html(content);
    }

    $('.text').val('');
  });

});

