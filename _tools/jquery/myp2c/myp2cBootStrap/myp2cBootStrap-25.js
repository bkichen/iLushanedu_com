/*
* 依赖：jquery，bootstrap
* 一些bootstrap页面的帮助方法
* Copyright (c) 2016 chinaxiaofei@mypc.com
* http://www.myp2c.com
*/

/*【弹出对话框，显示消息或嵌入网址】
* title：对话框标题
* text：对话框提示信息，有src是可为空
* src：对话框嵌入网址，可为空
* size123：对话框尺寸，1小2中3大，其他值默认中
* callbackOk：关闭回调方法字符串，比如alert('ok')。
* textOk：确定按钮文字，''将隐藏确定按钮。
* textCancel：取消按钮文字，''将隐藏确定按钮。
*
* 例如1：myp2c_bs_OpenDlg('提示信息','提示内容','',1,null,'关闭提示框','');
* 例如2：myp2c_bs_OpenDlg('确定信息','描述信息','',2,"alert('ok')",'确定','取消');
* 例如3：myp2c_bs_OpenDlg('嵌入响应式网页框','','http://www.baidu.com',3,null,'','');
*
* Copyright (c) 2016 chinaxiaofei@mypc.com
* http://www.myp2c.com
*/
function _myp2c_bs_OpenDlg(title, text, src, size123, callbackOk, textOk, textCancel) {
    var dlg = $('#myp2c_bs_OpenDlg_div');
    if (dlg.length == 0) {
        var html = "<div class='modal fade' id='myp2c_bs_OpenDlg_div' tabindex='-1' role='dialog'>" +
          "<div class='modal-dialog' role='document' id='myp2c_bs_OpenDlg_doc'>" +
            "<div class='modal-content'>" +
              "<div class='modal-header'>" +
                "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>" +
                "<h4 class='modal-title' style='color:#999999;font-family:微软雅黑;' id='myp2c_bs_OpenDlg_title'>友情提示</h4>" +
              "</div>" +
              "<div class='modal-body' id='myp2c_bs_OpenDlg_body'>&nbsp;</div>" +
              "<div class='modal-footer'>" +
                "<button type='button' class='btn btn-primary' id='myp2c_bs_OpenDlg_ok'>确定</button>&nbsp;" +
                "<button type='button' class='btn btn-default' data-dismiss='modal' id='myp2c_bs_OpenDlg_cancel'>取消</button>" +
              "</div>" +
            "</div>" +
          "</div>" +
        "</div>";
        dlg = $(html).appendTo('body');
    }
    //
    if (dlg.length > 0) {
        //尺寸
        if (size123 == 3) {
            $('#myp2c_bs_OpenDlg_doc').removeClass('modal-sm').addClass('modal-lg');
        }
        else if (size123 == 1) {
            $('#myp2c_bs_OpenDlg_doc').removeClass('modal-lg').addClass('modal-sm');
        }
        else {
            $('#myp2c_bs_OpenDlg_doc').removeClass('modal-sm').removeClass('modal-lg');
        }
        //标题
        $('#myp2c_bs_OpenDlg_title').html((title == '' ? '友情提示' : title));
        //确定
        var btnOk = dlg.find('#myp2c_bs_OpenDlg_ok');
        if (textOk != '') {
            btnOk.css('display', '');
            btnOk.text(textOk);
            btnOk.one('click', function (e) {
                if (callbackOk != '') {
                    eval(callbackOk);
                }
                dlg.modal('hide');
            });
        }
        else {
            btnOk.css('display', 'none');
        }
        //取消
        var btnCancel = dlg.find('#myp2c_bs_OpenDlg_cancel');
        if (textCancel != '') {
            btnCancel.css('display', '');
            btnCancel.text(textCancel);
        }
        else {
            btnCancel.css('display', 'none');
        }
        //
        var msg = "<p>" + text + "</p>";
        if (src != '') {
            msg = "<div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='" + src + "'></iframe></div>";
        }
        $('#myp2c_bs_OpenDlg_body').html(msg);
        //显示
        dlg.modal({ show: true, backdrop: true });
    }
}
function myp2c_bs_OpenDlg(title, text, src, size123, callbackOk, textOk, textCancel) {
    if (parent._myp2c_bs_OpenDlg) {
        parent._myp2c_bs_OpenDlg(title, text, src, size123, callbackOk, textOk, textCancel);
    }
    else {
        _myp2c_bs_OpenDlg(title, text, src, size123, callbackOk, textOk, textCancel);
    }
}


/*弹出输入框，参数callback如：alert({v})*/
function myp2c_bs_OpenInput(title, textLabel, callbackOk, textOk, sValue, IsM) {
    var dlg = $('#myp2c_bs_OpenInput_div');
    if (dlg.length == 0) {
        var html = "<div class='modal fade' id='myp2c_bs_OpenInput_div' tabindex='-1' role='dialog'>" +
          "<div class='modal-dialog' role='document'>" +
            "<div class='modal-content'>" +
              "<div class='modal-header'>" +
                "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>" +
                "<h4 class='modal-title' style='color:#999999;font-family:微软雅黑;' id='myp2c_bs_OpenInput_title'>&nbsp;</h4>" +
              "</div>" +
              "<div class='modal-body' id='myp2c_bs_OpenInput_body'>&nbsp;</div>" +
              "<div class='modal-footer'>"+
                    "<button type='button' class='btn btn-primary' id='myp2c_bs_OpenInput_ok'>确定</button>&nbsp;" +
                    "<button type='button' class='btn btn-default' data-dismiss='modal'>取消</button>" +
              "</div>"+
            "</div>" +
          "</div>" +
        "</div>";
        dlg = $(html).appendTo('body');
    }
    //
    if (dlg.length > 0) {
        var fm = "<form>"+
            "<div class='form-group'>" +
                "<label for='myp2c_bs_OpenInput_value' class='control-label' style='color:#999999;'>" + textLabel + "：" + "</label>" +
                (IsM ? "<textarea class='form-control' id='myp2c_bs_OpenInput_value' rows='3'>"+sValue+"</textarea>" : "<input class='form-control' id='myp2c_bs_OpenInput_value' value='" + sValue + "' />") +
            "</div>"
        "</form>";
        $('#myp2c_bs_OpenInput_body').html(fm);
        $('#myp2c_bs_OpenInput_title').html((title == '' ? '输入框' : title));
        $('#myp2c_bs_OpenInput_ok').html((textOk == '' ? '确定' : textOk));
        dlg.modal({ show: true, backdrop: false });
        $('#myp2c_bs_OpenInput_ok').one('click', function (e) {
            if (callbackOk != '') {
                var val = $('#myp2c_bs_OpenInput_value').val();
                if (callbackOk.indexOf('{v}') > 0) {
                    callbackOk = callbackOk.replace('{v}', 'val');
                }
                eval(callbackOk);
            }
            dlg.modal('hide');
        });
    }
}
