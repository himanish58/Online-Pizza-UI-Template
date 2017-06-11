$(function() {
  if($(window).width() < 768) {
    $("img").each(function() {
      $(this).attr("src", $(this).attr("src").replace("images/logo.jpg", "images/logo-mobile.jpg"));
    });
  }
});

$(function() {
  if($(window).width() >= 768) {
    $("img").each(function() {
      $(this).attr("src", $(this).attr("src").replace("images/logo-mobile.jpg","images/logo.jpg"));
    });
  }
});
