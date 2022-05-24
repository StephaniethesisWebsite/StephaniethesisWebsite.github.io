var backbtn = $("#backButton");
    backbtn.on('click', function(e) {
      // alert("clicked");
  e.preventDefault();
   $('html, body').animate({scrollTop:0}, '300');
  // $('.x1-cognitive-labor').animate({scrollTop:0}, '300');
});