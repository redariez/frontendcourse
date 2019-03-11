$(document).ready(function() {
  var el = document.getElementById('text');
  });

gQuery(".my-selector").addClass("MYNEWCLASS");

gQuery("#main").addClass("HELLO");
  $(document).on('mousedown', function(event) {
    event.stopPropagation();

    if (event.which == 3) {

        $('.hidden').removeClass('shown');

        if($(event.target).is('img')) {
            $('.saveimg, .newtab').addClass('shown');
        }else if($(event.target).is('a')) {
          $('.newtab').addClass('shown');
        }

      console.log(event.pageY, event.pageX);

      $('#context').css({
        top: event.pageY,
        left: event.pageX
      });

          $('#context').fadeIn();
      return false;

    }
      $('#context').fadeOut();

  });

  $('[data-trigger="dropdown"]').on('mouseenter', function() {
    var submenu = $(this).parent().find('.submenu')
    submenu.fadeIn(300);


    $('.profile-menu').on('mouseleave', function() {
      submenu.fadeOut(300);
    });
  });


  $('#prepend, #append, #replace').on('click', function(e) {
    e.preventDefault();

    var el = $(e.currentTarget);
    var action = el.attr('id');
    var content = $('.text').val();


    if (action == "prepend") {
      console.log("Prepending...", content)
      $('#main').prepend(content);

    } else if (action == "append") {
      console.log("Appending...")
      $('#main').append(content);

    } else if (action == "replace") {
      console.log("Replacing...")
      $('#main').html(content);


    }

    $('.text').val('');
  });
