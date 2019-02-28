$(document).ready(function() {
      var el = document.getElementById('text');


      $('[data-trigger="dropdown"]').on('mouseenter', function() {
          var submenu = $(this).parent().find('.submenu')
          submenu.fadeIn(300);


          $('.profile-menu').on('mouseleave', function() {
            submenu.fadeOut(300);
          });
      });

$('#prepend, #append, #replace').on('click', function(e) {
    var el = $(e.currentTarget);
    var action = el.attr('id');
    var content = $('#text').val();


    if(action == "prepend") {
      console.log("Prepending...", content)
      $('#main').prepend(content);

    }else if(action == "append") {
      console.log("Appending...")

    }else if(action == "replace") {
      console.log("Replacing...")
    }

});

});
