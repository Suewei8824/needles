$(".send").click(function () {
    var email = $("input[name=email]").val();
    EmailVerify(email);
})

function EmailVerify(email) {
    $.ajax({
        url: host + "/session" + next,
        type: "GET",
        data: JSON.stringify({
            email: email
        }),
        contentType: "application/json",
        dataType: "json",
        success: function (res) {
            $("button.send").addClass("success").html("成功，请去邮箱查收邮件");
            localStorage.setItem("reguser", JSON.stringify(res));
            setTimeout(function () {
                window.location.href = "/login";
            }, 1000);
        },
        error: function (err) {
            showTips("注册账户失败！");
            setTimeout(function () {
                location.reload();
            }, 1000);
        }
    })
}