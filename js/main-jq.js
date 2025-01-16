$(document).ready(function() {

  gQuery('my-selector').addClass('new-class');

  $(document).on('contextmenu', function(event) {
    return false;
  });

 

  $(document).on('mousedown', function(event) {
    event.stopPropagation();

    if (event.which === 1) {

      $('.hidden').removeClass('shown');

      if($(event.target).is('img')) {
        $('.saveimg, .newtab').addClass('shown');
      } else if($(event.target).is('a')) {
        $('.newtab').addClass('shown');
      }


      $('#context').css({
        top: event.pageY,
        left: event.pageX
      });

      $('#context').fadeIn();
      return false;

     
    }

    $('#context').fadeOut();

    // switch (event.which) {
    //   case 1:
    //     console.log('Left mouse button pressed');
    //     break;
    //   case 2:
    //     console.log('Middle mouse button pressed');
    //     break;
    //   case 3:
    //     console.log('Right mouse button pressed');
    //     break;
    //   default:
    //     console.log('Unknown mouse button pressed');
    // }
  });

  $('[href="https://www.google.com"]').on('click', function(event) {
    // event.preventDefault();
    return false;
    console.log('Google link clicked');
  });

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

