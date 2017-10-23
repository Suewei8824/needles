var btn = $(".btn");
var inputpage = $(".inputpage");
var showtext = $(".showtext");
var input = $(".input[name=email]").val();

$(".btn").click(function () {

    inputpage.addClass("hide");
    showtext.removeClass("hide");
    $(".getemail").text($(".input[name=email]").val());
})