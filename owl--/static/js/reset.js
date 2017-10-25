var btn = $(".btn");
var inputpage = $(".inputpage");
var showtext = $(".showtext");
var input = $(".input[name=email]").val();

$(".btn").click(function () {

    inputpage.addClass("hide");
    showtext.removeClass("hide");

    $(".getemail").text($(".input[name=email]").val());
    var email = $(".input[name=email]").val();

    emailPost(email);
    
})

var host = "/api/v1";

function emailPost(email) {
    $.ajax({
        url: host + "/user/token/" + forget,
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            email: email
        }),
        success: function (res) {
            alert("邮箱地址发送成功，请前往查看！");
        },
        error: function (err) {
            alert("邮箱地址发送失败！");
        }
    })
}