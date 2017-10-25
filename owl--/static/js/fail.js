$(".send").click(function () {
    var email = $("input[name=email]").val();
    emailPost(email);
})

function emailPost(email) {
    var host = window.location.host;
    $.ajax({
        url: host + "/user/token/",
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            email: email
        }),
        success: function (res) {
            layer.msg("验证邮箱发送成功！");
        },
        error: function (err) {
            layer.msg("验证邮件发送失败！");
        }
    })
}