/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/ 


! function() {
    function a(a) {
        return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y) }

    function b(a) {
        return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'" }

    function c(c, d) {
        function e(a) {
            return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a }

        function f(b) {
            var c = m;
            if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function() {
                    return m++, "$line=" + m + ";" })), 0 === b.indexOf("=")) {
                var e = l && !/^=[=#]/.test(b);
                if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
                    var f = b.replace(/\s*\([^\)]+\)/, "");
                    n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")") } else b = "$string(" + b + ")";
                b = s[1] + b + s[2] }
            return g && (b = "$line=" + c + ";" + b), r(a(b), function(a) {
                if (a && !p[a]) {
                    var b;
                    b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0 } }), b + "\n" }
        var g = d.debug,
            h = d.openTag,
            i = d.closeTag,
            j = d.parser,
            k = d.compress,
            l = d.escape,
            m = 1,
            p = { $data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1 },
            q = "".trim,
            s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
            t = q ? "$out+=text;return $out;" : "$out.push(text);",
            u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
            v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
            w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
            x = s[0],
            y = "return new String(" + s[3] + ");";
        r(c.split(h), function(a) { a = a.split(i);
            var b = a[0],
                c = a[1];
            1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c))) });
        var z = w + x + y;
        g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
        try {
            var A = new Function("$data", "$filename", z);
            return A.prototype = n, A } catch (B) {
            throw B.temp = "function anonymous($data,$filename) {" + z + "}", B } }
    var d = function(a, b) {
        return "string" == typeof b ? q(b, { filename: a }) : g(a, b) };
    d.version = "3.0.0", d.config = function(a, b) { e[a] = b };
    var e = d.defaults = { openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null },
        f = d.cache = {};
    d.render = function(a, b) {
        return q(a, b) };
    var g = d.renderFile = function(a, b) {
        var c = d.get(a) || p({ filename: a, name: "Render Error", message: "Template not found" });
        return b ? c(b) : c };
    d.get = function(a) {
        var b;
        if (f[a]) b = f[a];
        else if ("object" == typeof document) {
            var c = document.getElementById(a);
            if (c) {
                var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");
                b = q(d, { filename: a }) } }
        return b };
    var h = function(a, b) {
            return "string" != typeof a && (b = typeof a, "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a },
        i = { "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;" },
        j = function(a) {
            return i[a] },
        k = function(a) {
            return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j) },
        l = Array.isArray || function(a) {
            return "[object Array]" === {}.toString.call(a) },
        m = function(a, b) {
            var c, d;
            if (l(a))
                for (c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a);
            else
                for (c in a) b.call(a, a[c], c) },
        n = d.utils = { $helpers: {}, $include: g, $string: h, $escape: k, $each: m };
    d.helper = function(a, b) { o[a] = b };
    var o = d.helpers = n.$helpers;
    d.onerror = function(a) {
        var b = "Template Error\n\n";
        for (var c in a) b += "<" + c + ">\n" + a[c] + "\n\n"; "object" == typeof console && console.error(b) };
    var p = function(a) {
            return d.onerror(a),
                function() {
                    return "{Template Error}" } },
        q = d.compile = function(a, b) {
            function d(c) {
                try {
                    return new i(c, h) + "" } catch (d) {
                    return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c)) } }
            b = b || {};
            for (var g in e) void 0 === b[g] && (b[g] = e[g]);
            var h = b.filename;
            try {
                var i = c(a, b) } catch (j) {
                return j.filename = h || "anonymous", j.name = "Syntax Error", p(j) }
            return d.prototype = i.prototype, d.toString = function() {
                return i.toString() }, h && b.cache && (f[h] = d), d },
        r = n.$each,
        s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
        t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
        u = /[^\w$]+/g,
        v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
        w = /^\d[^,]*|,\d[^,]*/g,
        x = /^,+|,+$/g,
        y = /^$|,+/;
    e.openTag = "{{", e.closeTag = "}}";
    var z = function(a, b) {
        var c = b.split(":"),
            d = c.shift(),
            e = c.join(":") || "";
        return e && (e = ", " + e), "$helpers." + d + "(" + a + e + ")" };
    e.parser = function(a) { a = a.replace(/^\s/, "");
        var b = a.split(" "),
            c = b.shift(),
            e = b.join(" ");
        switch (c) {
            case "if":
                a = "if(" + e + "){";
                break;
            case "else":
                b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "", a = "}else" + b + "{";
                break;
            case "/if":
                a = "}";
                break;
            case "each":
                var f = b[0] || "$data",
                    g = b[1] || "as",
                    h = b[2] || "$value",
                    i = b[3] || "$index",
                    j = h + "," + i; "as" !== g && (f = "[]"), a = "$each(" + f + ",function(" + j + "){";
                break;
            case "/each":
                a = "});";
                break;
            case "echo":
                a = "print(" + e + ");";
                break;
            case "print":
            case "include":
                a = c + "(" + b.join(",") + ");";
                break;
            default:
                if (/^\s*\|\s*[\w\$]/.test(e)) {
                    var k = !0;
                    0 === a.indexOf("#") && (a = a.substr(1), k = !1);
                    for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++) o = z(o, m[l]);
                    a = (k ? "=" : "=#") + o } else a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a }
        return a },  this.template =  d ;
 
    template('footer','<div class="g-footer-warp"> <div class="g-footer mod"> <div class="footer-container text-center"> <div class="clearfix inline-block text-left"> <div class="footer-ex"> <div class="footer-kefu mr-bt15" > <i class=\'icon iconfont icon-notice font28 mr-rt5\'></i> <a id=\'service-link\' class="pointer font20 pointer">在线客服</a> </div> <div class="font20">服务热线：4008-588-066</div> <div class="mr-tp5">工作时间 9:00 - 20:00（法定节假日除外）</div> <div class="mr-tp10">地址：北京市朝阳区东三环北路乙2号海南航空大厦A座7层</div> </div> </div> <div class="follow clearfix mr-lt40"> <div class="follow-list"> <div class="follow-img ft-weibo-dingyue"></div> <div class="follow-title"> <i class="icon iconfont icon-weixins"></i> <a>关注订阅号</a> </div> </div> <div class="follow-list"> <div class="follow-img ft-weibo-fuwu"></div> <div class="follow-title"> <i class="icon iconfont icon-weixins"></i> <a>关注服务号</a> </div> </div> <div class="follow-list"> <div class="follow-img ft-weibo"></div> <div class="follow-title"> <i class="icon iconfont icon-weibo"></i> <a href="http://weibo.com/u/5000682691" class="pointer">关注官方微博</a> </div> </div> </div> </div> <div class="footer-authentication"> <div class="atn-list"> <a href="http://test.instantssl.com/wildcard-ssl.html" target="_blank" class="atn-ssl"></a> <a href="http://www.itrust.org.cn/Home/Index/itrust_certifi?wm=1091876832" target="_blank" class="atn-internet"></a> <a href="https://credit.szfw.org/CX20150611010303010832.html" target="_blank" class="atn-trust"></a> <a key="564e795befbfb0089e77490e" logo_size="124x47" logo_type="business" href="http://www.anquan.org/authenticate/cert/?site=www.wanglibao.com&amp;at=business" id="safes" target="_blank"><span id="kx-mask-safes"></span> <img src="/images/hy_124x47_gray.png" alt="安全联盟认证" width="140" height="50" style="border: none;"></a> <span class="kx-verify-warp"> <script id="kx_script" async="" cid="kx_verify" src="https://ss.knet.cn/static/js/icon3.js?sn=e151125110108615827egl000000&amp;tp=icon3" size="0"></script> <span id="kx_verify"></span> </span> </div> </div> <div class="text-center colorf about"> <div class="about-list"> <a href="/theme/about/" >关于我们</a>| <a href="/cms/news/list/1.html" >媒体报道</a>| <a href="/cms/dynamic/list/1.html" >网利动态</a>| <a href="/cms/notice/list/1.html" > 网站公告</a> </div> <p class=\'mr-tp15 font13\'>Copyright©2015 wanglibao.com Inc. All Right Reserved.</p> <p class=\'mr-tp10 font13\'>北京网利科技有限公司 京 ICP 备 14014548号-1 京 ICP证 160186号</p> </div> </div> </div> ');/*v:1*/
    template('head','<script> var _hmt = _hmt || []; (function() { var hm = document.createElement("script"); hm.src = "//hm.baidu.com/hm.js?8b9c036b173399804571158d081d6480"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); })(); </script> <div class="i-mod-wrap g-small-nav-warp"> <div class="g-small-nav"> <div class="g-samll-start"> <div class="samll-nav-hotline">客服热线 ： 4008-588-066</div> <div class="samll-nav-wechat samll-nav-animate">关注有惊喜 <div class="samll-wechat-hover"> <div class="wechat-hover-body"> <div class="wechat-hover-san"></div><img src="/images/wechat_server.jpg"> <div class="wechat-hover-dec">关注网利宝微信</div> </div> </div> </div> <div class="samll-nav-app samll-nav-animate">网利宝APP <div class="samll-wechat-hover"> <div class="wechat-hover-body"> <div class="wechat-hover-san"></div><img src="/images/app_download_new.jpg"> <div class="wechat-hover-dec">下载网利宝APP</div> </div> </div> </div> </div> <div class="g-samll-end"> <a href="/theme/about/index.html#about" class="samll-nav-guide">关于我们</a>  <a href="/theme/pc_guide/" class="samll-nav-guide">新手指引</a> <a href="/cms/help.html" class="samll-nav-guide" id=\'help\'>帮助中心</a> </div> </div> </div> <div id="header"> <div class="top"> <div class="top-center"> <div class="head-left"> <a href="/" class="logo_80"><img src="/images/logo_yuandan.jpg" /></a> <a href="/" class="logo_60"><img src="/images/logo_yuandan_min.jpg" /></a> </div> <div class="head-right"> <ul class="main-ul" id="m-ul"> <li> <a href="/">首页</a> </li> <li> <a href=\'/ylb/month_list.html\'>理财专区</a> </li> <li> <a href="/theme/finance/">借款专区</a> </li> <li> <a href="/theme/security/">风险控制</a> </li> <li> <a href="/cms/study/list/1.html">理财课堂</a> </li> </ul> </div> <div class="myself" id=\'myself\'> <a href="/investManage/person.html"> 我的账户 </a> <b class="sicon icon-down-new"></b> <b class="sicon icon-up-new sanjiao"></b> <ul class="myself-small-ul"> <li> <a href="/financeManage/recharge.html" data-id=\'3\'>我要充值</a> </li> <li class="small-hight"> <a href="/financeManage/extract.html" data-id=\'4\'>我要提现</a> </li> <li> <a href="/financeManage/auto_tag.html" data-id=\'5\'>自动投标</a> </li> <li> <a href="/investManage/invest_p2p_log.html" data-id=\'0\'>交易记录</a> </li> </ul> </div> </div> </div>  </div> ');/*v:1*/
    template('left','<div class="ylb-left pull-left"> <div class=\'bgff border clearfix mr-tp20 p2p-box\'> <div class=\'clearfix ylb-left-user\'> <span class=\'pull-left\'> <a href="/investManage/person.html"><img src="/images/active.png" alt="" width=\'60px\' height=\'60px\'></a> </span> <div class=\'over-hide pd-lt20\'> <p class=\'color6 mr-tp10\' id =\'wlb-hour\'></p> <p class=\'color9 mr-tp5\'>感谢您对网利宝的信任！</p> </div> </div> <div class=\'clearfix mr-lt30 mr-rt30 mr-bt20\'> <span class=\'pull-left color9\'> 安全级别： </span> <div class=\'over-hide\'> <span class=\'pink\'>低</span> <div class="ylb-left-line clr" id=\'safe_level\'> </div> <a class=\'color9\' href=\'/memberManage/safe.html\'>提升</a> </div> </div> <div class=\'clearfix mr-lt30 mr-rt30 mr-bt20 border-bt\'> <span class=\'pull-left color9\'>会员成长：</span> <div class=\'over-hide\'> <p class=\'colorc ylb-left-safebox\' id=\'wlb-level\'></p> </div> </div>  <hr> <ul class="clearfix ylb-left-bound color6"> <li class=\'pull-left\'> <span class=\'iconfont icon-mobile font26 on\'></span> <p class=\'mr-tp5\'>已绑定</p> </li> <li class=\'pull-left\' id=\'wlb-is-identify\'> </li> <li class=\'pull-left\' id=\'wlb-is-bindcard\'> </li> </ul> </div> <div class=\'bgff border clearfix mr-tp20 font12 p2p-box\'> <h3 class=\'font16 mr-tp20 color9 mr-lt20\'>投资管理</h3> <ul class="clearfix ylb-left-manage color6"> <li class=\'pull-left aleft\'> <a href="../investManage/invest_p2p_log.html"> <p class=\'iconfont icon-401 font26 yellow \'></p> <p class=\'mr-tp5\'>投资记录</p> </a> </li> <li class=\'pull-left aleft\'> <a href="../investManage/water_bill.html"> <p class=\'iconfont icon-dingdan font26 yellow\'></p> <p class=\'mr-tp5\'>流水账单</p> </a> </li> <li class=\'pull-left aleft\'> <a href="../investManage/transfer_sale_start.html"> <p class=\'iconfont icon-50101 font26 yellow\'></p> <p class=\'mr-tp5\'>债权转让</p> </a> </li> </ul> <h3 class=\'font16 mr-tp20 color9 mr-lt20\'>资金管理</h3> <ul class="clearfix ylb-left-manage color6"> <li class=\'pull-left aleft\'> <a href="../financeManage/recharge.html"> <p class=\'iconfont icon-tixian3gaichongzhi big yellow\'></p> <p class=\'mr-tp5\'>充值</p> </a> </li> <li class=\'pull-left aleft\'> <a href="../financeManage/extract.html"> <p class=\'iconfont icon-tubiaotixiansvg01 font26 yellow\'></p> <p class=\'mr-tp5\'>提现</p> </a> </li> <li class=\'pull-left aleft\'> <a href="../financeManage/auto_tag.html"> <p class=\'iconfont icon-rocket font26 yellow\'></p> <p class=\'mr-tp5\'>自动投标</p> </a> </li> </ul> <h3 class=\'font16 mr-tp20 color9 mr-lt20\'>活动奖励</h3> <ul class="clearfix ylb-left-manage color6"> <li class=\'pull-left aleft\'> <a href="../activeManage/taste_money.html"> <p class=\'iconfont icon-wallet font26 yellow\'></p> <p class=\'mr-tp5\'>体验金</p> </a> </li> <li class=\'pull-left aleft\'> <a href="../activeManage/taobao.html"> <p class=\'iconfont icon-newicon05 font26 yellow\'></p> <p class=\'mr-tp5\'>全民淘金</p> </a> </li> <li class=\'pull-left aleft\'> <a href="../activeManage/ticket_raise_unused.html"> <p class=\'iconfont icon-601 font26 yellow\'></p> <p class=\'mr-tp5\'>理财券</p> </a> </li> </ul> <h3 class=\'font16 mr-tp20 color9 mr-lt20\'>会员信息</h3> <ul class="clearfix ylb-left-manage color6"> <li class=\'pull-left aleft\'> <a href="../memberManage/safe.html"> <p class=\'iconfont icon-iconfontanquan font26 yellow\'></p> <p class=\'mr-tp5\'>安全认证</p> </a> </li> <li class=\'pull-left aleft\'> <a href="../memberManage/profile.html"> <p class=\'iconfont icon-gerenxinxi01 font26 yellow\'></p> <p class=\'mr-tp5\'>个人资料</p> </a> </li> <li class=\'pull-left aleft\'> <a href="../memberManage/message.html" class=\'pos-rel\'> <p class=\'iconfont icon-1101 font26 yellow\'></p> <p class=\'mr-tp5\'>站内信</p> <var id=\'left-notice\'></var> </a> </li> </ul> </div> </div> ');
    template('cleft','<div class="ylb-left pull-left"> <div class=\'bgff border clearfix mr-tp20 p2p-box\'> <div class=\'clearfix ylb-left-user\'> <span class=\'pull-left\'> <a href="/investManage/person.html"><img src="/images/active.png" alt="" width=\'60px\' height=\'60px\'></a> </span> <div class=\'over-hide pd-lt20\'> <p class=\'color6 mr-tp10\' id =\'wlb-hour\'></p> <p class=\'color9 mr-tp5\'>感谢您对网利宝的信任！</p> </div> </div> <div class=\'clearfix mr-lt30 mr-rt30 mr-bt20\'> <span class=\'pull-left color9\'> 安全级别： </span> <div class=\'over-hide\'> <span class=\'pink\'>低</span> <div class="ylb-left-line clr" id=\'safe_level\'> </div> <a class=\'color9\' href=\'/memberManage/safe.html\'>提升</a> </div> </div> <div class=\'clearfix mr-lt30 mr-rt30 mr-bt20 border-bt\'> <span class=\'pull-left color9\'>会员成长：</span> <div class=\'over-hide\'> <p class=\'colorc ylb-left-safebox\' id=\'wlb-level\'></p> </div> </div>  <hr> <ul class="clearfix ylb-left-bound color6"> <li class=\'pull-left\'> <span class=\'iconfont icon-mobile font26 on\'></span> <p class=\'mr-tp5\'>已绑定</p> </li> <li class=\'pull-left\' id=\'wlb-is-identify\'> </li> <li class=\'pull-left\' id=\'wlb-is-bindcard\'> </li> </ul> </div> <div class=\'bgff border clearfix mr-tp20 font12 p2p-box\'> <h3 class=\'font16 mr-tp20 color9 mr-lt20\'>投资管理</h3> <ul class="clearfix ylb-left-manage color6"> <li class=\'pull-left\'> <a href="../company/invest_p2p_log.html"> <p class=\'iconfont icon-401 font26 yellow \'></p> <p class=\'mr-tp5\'>投资记录</p> </a> </li> <li class=\'pull-left\'> <a href="../company/water_bill.html"> <p class=\'iconfont icon-dingdan font26 yellow\'></p> <p class=\'mr-tp5\'>流水账单</p> </a> </li> </ul> <h3 class=\'font16 mr-tp20 color9 mr-lt20\'>资金管理</h3> <ul class="clearfix ylb-left-manage color6"> <li class=\'pull-left\'> <a href="../company/recharge.html"> <p class=\'iconfont icon-tixian3gaichongzhi big yellow\'></p> <p class=\'mr-tp5\'>充值</p> </a> </li> <li class=\'pull-left\'> <a href="../company/extract.html"> <p class=\'iconfont icon-tubiaotixiansvg01 font26 yellow\'></p> <p class=\'mr-tp5\'>提现</p> </a> </li> </ul> </div> </div> ');/*v:1*/
    $('#sheader').html(template('head', {}));
    $("#sleft").html(template('left', {}));
    $("#cleft").html(template('cleft', {}));
    $("#sfooter").html(template('footer', {}));
    //头部添加
    }();

