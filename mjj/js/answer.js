//滚动条监听
$(window).scroll(function () {
  if ($(window).scrollTop() >= 90) {
    if ($("header").hasClass("h_gd")) {
      return false;
    }
    $(".signboard").hide();
    $("header").addClass("h_gd");
    $(".sidebar").addClass("s_gd");
    $(".content").addClass("c_gd");
    $(".header_r").addClass("header_gd");
    $(".logo").addClass("logo_gd");
    $(".seek").addClass("seek_gd");
  } else {
    $(".signboard").show();
    $("header").removeClass("h_gd");
    $(".sidebar").removeClass("s_gd");
    $(".content").removeClass("c_gd");
    $(".header_r").removeClass("header_gd");
    $(".logo").removeClass("logo_gd");
    $(".seek").removeClass("seek_gd");
  }
});
