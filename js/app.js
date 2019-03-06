$(document).ready(function() {
  var el = document.getElementById('text');

  $(document).on('mousedown', function(event) {
    event.preventDefault();

    switch (event.which) {
      case 1:
        console.log("Clicked left mouse button");
        break;
      case 2:
      console.log("Clicked middle button");
      break;
      case 3:
      console.log("Clicked right button");
      break;
    }

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

});
