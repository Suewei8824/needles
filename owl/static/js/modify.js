var profilecard = $(".profilecard");
var passwordcard = $(".passwordcard");
var modifyprof = $(".modify-prof");
var modifypass = $(".modify-pass");
var email = $(".email");

$(".modify-prof").click(function () {
    modifyprof.addClass("selected");
    profilecard.removeClass("hide");
    passwordcard.addClass("hide");
    modifypass.removeClass("selected");
})

$(".modify-pass").click(function () {
    modifyprof.removeClass("selected");
    passwordcard.removeClass("hide");
    profilecard.addClass("hide");
    modifypass.addClass("selected");
})

GetProfile(username, email, realname);

$("input[name=realname]").val(realname);

$(".submit").click(function () {
    PostProfile(username, email, realname);
})

function GetProfile(username, email, realname) {
    $.ajax({
        url: host + "/user",
        type: "GET",
        data: JSON.stringify({
            username: username,
            email: email,
            realname: realname
        }),
        contentType: "application/json",
        dataType: "json"
    })
}

function PostProfile(username, email, realname) {
    $.ajax({
        url: host + "/user",
        type: "POST",
        data: JSON.stringify({
            username: username,
            email: email,
            realname: realname
        }),
        contentType: "application/json",
        dataType: "json"
    })
}

