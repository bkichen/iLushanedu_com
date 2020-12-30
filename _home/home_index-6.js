$(function () {
    myp2c_sm_tool_build();
    //
    $.ajax({
        url: '/_home/home_index_ajax.ashx',
        data: { action: 'GetAppAds', TabId: _json_base.TabId },
        type: 'POST', dataType: 'text', cache: false,
        success: function (result, s, r) {
            if (result != '') {
                $(document.body).append(result);
            }
        }
    });
});

//***异步加载其他脚本
$().myp2cLoadX({ url: _json_base.p_hs_css, type: 'css', async: true });
$().myp2cLoadX({ url: _json_base.p_hs_js, type: 'js', async: true });
$().myp2cLoadX({ url: _json_base.p_dblscroll, type: 'js', async: true });
//************


//打开模块面板
function myp2c_OpenManageModule(btn, sSkinModuleId) {
    myp2c_OpenDlg(btn, '管理模块内容', 800, 568, _json_base.p_mc_admin.replace('{SkinModuleId}', sSkinModuleId));
}

//模块内容工具按钮
function myp2c_sm_tool(sSkinModuleId, bAdmin) {
    if (bAdmin) {
        return "<div style='position:absolute;width:30px;height:16px;left:0px;top:0px;z-index:10000;border:1px solid #ff0000;'>" +
            "<iframe frameborder='0' scrolling='no' style='position:absolute;width:30px;height:16px;top:0px;left:0px;z-index:-1;'></iframe>" +
            "<div title='设置此模块占位' onclick=\"myp2c_OpenManageModule(this,'" + sSkinModuleId + "');return false;\" style='position:absolute;width:14px;height:14px;left:0px;top:0px;z-index:1;cursor:pointer;background-color:#ffff00;background-image:url(" + _json_base.p_img_edit + ");background-position:center;background-repeat:no-repeat;border-right:1px dotted #ff0000;'>&nbsp;</div>" +
            "<img title='删除此模块占位' onclick=\"myp2c_DoCmd('sm_delete', '" + sSkinModuleId + "', '', '将删除此模块占位！确定？');\" style='position:absolute;width:14px;height:14px;left:14px;top:0px;z-index:1;cursor:pointer;background-color:#ffff00;' src='" + _json_base.p_img_delete + "' />" +
        "</div>";


    }
    else {
        return "<div style='position:absolute;width:16px;height:16px;left:0px;top:0px;z-index:10000;'>" +
            "<iframe frameborder='0' scrolling='no' style='position:absolute;width:20px;height:20px;top:0px;left:0px;z-index:-1;'></iframe>" +
            "<div onclick=\"myp2c_OpenManageModule(this,'" + sSkinModuleId + "');return false;\" style='position:absolute;width:14px;height:14px;left:0px;top:0px;z-index:1;cursor:pointer;background-color:#ffff00;background-image:url(" + _json_base.p_img_edit + ");background-position:center;background-repeat:no-repeat;border:1px solid #ff0000;'>&nbsp;</div>" +
        "</div>";
    }
}

function myp2c_sm_tool_build() {
    var bAdmin = (_json_base.admin == '1');
    if (_json_base.a == '1' || bAdmin) {
        $("div[id^='myp2c_sm_div_']").each(function (index) {
            var me = $(this);
            me.append(myp2c_sm_tool(me.attr('id').replace('myp2c_sm_div_', ''), bAdmin));
        });
    }
}
