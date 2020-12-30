/*
本域默认同步或异步加载脚本或CSS到DOM，async:true表示异步。
例如：$().myp2cLoadX({url:'url',type:'js'[js|css],async:false[true|false]});
* Copyright (c) 2008 chinaxiaofei@mypc.com
* http://www.myp2c.com
*/
(function ($) {
    $.fn.myp2cLoadX = function (options) {

        var defaults = { url: '', type: 'js', async: false };
        var c = $.extend({}, defaults, options);

        //全局变量$.fn.myp2cLoadX.urls
        var s = '|' + c.url + '|';
        var loaded = false;
        if (!$.fn.myp2cLoadX.urls) {
            $.fn.myp2cLoadX.urls = s;
        }
        else if ($.fn.myp2cLoadX.urls.indexOf(s) >= 0) {
            loaded = true;
        }
        else {
            $.fn.myp2cLoadX.urls += s;
        }
        //
        if (loaded) {
            //路径已经存在！
        }
        else if (c.type == 'js') {
            //导入脚本到DOM
            $.ajax(c.url, { dataType: 'script', async: c.async });
        }
        else if (c.type == 'css') {
            //加载CSS到DOM
            $.ajax(c.url, { dataType: 'text', async: c.async }).done(function (data, textStatus, jqXHR) {
                $('head').append("<style type='text/css'>" + data + "</style>");
            });
        }
        //
        return this;
    };
})(jQuery);
