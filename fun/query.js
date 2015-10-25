$(document).ready(function() {
  $(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth > 900px) {
      $(div.col_3).removeClass( 'top' )
    }
    else {
      $(div.col_3).addClass( 'top' )
    }
  });
});
