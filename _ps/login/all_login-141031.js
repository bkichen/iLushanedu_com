$(function () {
    $("#UserId").keydown(input_onkeydown);
    $("#Password").keydown(input_onkeydown);
    $("#Code").keydown(input_onkeydown);
    $("#btn_login").click(btn_login_click);
});
function input_onkeydown(e) {
    if (e.which == 13) {
        $('#btn_login').click();
    }
}
function btn_login_click() {
    var sUserId = $('#UserId').val();
    var sPassword = $('#Password').val();
    var sCode = $('#Code').val();
    if (sUserId == "") {
        showMsg("帐户不能为空！")
        $('#UserId').focus();
    }
    else if (sPassword == "") {
        showMsg("密码不能为空！")
        $('#Password').focus();
    }
    else if (sCode == "") {
        showMsg("请输入校验码！");
        $('#Code').focus();
    }
    else {
        if (navigator.cookieEnabled) {
            showMsg('登录中...');
            $.ajax({
                url: _json_base.SourcePath + '/all_login_ajax.ashx',
                data: {
                    action: 'DoLogin', UserId: sUserId, Password: sPassword, Code: sCode
                },
                dataType: 'text', cache: false,
                success: function (result, s, r) {
                    if (result == 'ok') {
                        showMsg('登录成功！');
                        location.href = _json_base.rurl;
                    }
                    else {
                        showMsg(result);
                    }
                },
                error: function (r, s, err) {
                    showMsg('登录出现错误！');
                },
                complete: function (r, s) {
                    //
                }
            });
        } else {
            showMsg('请启用浏览器cookies设置！');
        }
        
    }
}

function showMsg(s) {
    $('#div_msg').html(s);
}