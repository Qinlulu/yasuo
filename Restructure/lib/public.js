define(["require","exports","module","https://imagecdn.xinyongjinku.com/wechat/lib/xxtea.js"],function(require,exports,module){function JsonpArr(e,t,n){this.method=e,this.params=t,this.sendUrl=n,this.time=20}function Setcookie(e,t){this.data=t,this.key=e,this.ispos=(new Ispos)._ispos()}function getItem(data,key){var ispos=(new Ispos)._ispos();if(!ispos)return"";var obj=localStorage.getItem(data),_obj=eval("("+obj+")");return obj?key?_obj[key]?_obj[key]:"":_obj:""}function Ispos(){}var XXTEA=require("https://imagecdn.xinyongjinku.com/wechat/lib/xxtea.js"),htp="https",hostName=location.hostname,defaultHname=htp+"://php1.wanglibao.com";window.location.href.indexOf("https")!=0&&hostName.indexOf("wanglibao")>-1&&(htp="http"),hostName.indexOf("wanglibao")>-1&&(defaultHname=htp+"://"+hostName);var api={initUrl:{localUrl:defaultHname+"/pro/api.php",loginUlr:defaultHname+"/passport/service.php?c=account",webUrl:defaultHname+"/yunying/rpc",webUrl2:defaultHname+"/yunying2/rpc",moneyUrl:defaultHname+"/passport/service.php?c=reward",billUrl:defaultHname+"/passport/service.php?c=trade",messageUrl:defaultHname+"/message/message.php?c=msg",platUrl:defaultHname+"/passport/service.php?c=channel",activePlatUrl:defaultHname+"/passport/service.php?c=inside"},JsonRpc:function(){var e=[];for(var t=0;t<arguments.length;t++){var n={jsonrpc:"2.0",params:[{}],id:1};n.id=t+1;for(var r in arguments[t])r=="method"?n.method=arguments[t][r]:n.params[0][r]=arguments[t][r];e.push(n)}return e},JsonpArr:function(){var e=[];for(var t=0;t<arguments.length;t++){var n={jsonrpc:"2.0",method:"",params:[{}],id:1};n.id=t+1,n.method=arguments[t][0];if(arguments[t][1])for(var r in arguments[t][1])n.params[0][r]=arguments[t][1][r];else n.params=[];e.push(n)}return e},_isUrl:function(e){return e?e.indexOf("http")>-1?e:e.indexOf("loginUlr")>-1?this.initUrl.loginUlr:e.indexOf("webUrl2")>-1?this.initUrl.webUrl2:e.indexOf("webUrl")>-1?this.initUrl.webUrl:e.indexOf("moneyUrl")>-1?this.initUrl.moneyUrl:e.indexOf("billUrl")>-1?this.initUrl.billUrl:e.indexOf("messageUrl")>-1?this.initUrl.messageUrl:e.indexOf("platUrl")>-1?this.initUrl.platUrl:e.indexOf("activePlatUrl")>-1?this.initUrl.activePlatUrl:this.initUrl.localUrl:this.initUrl.localUrl},call:function(e,t){var n=api._isUrl(t),e=e.length==1?e[0]:e,r=!0;if(hostName.indexOf("wanglibao")>-1&&api.getId("xxtea")!="true"){var r=!1,i="wlh5_H5~h5#H5";e=JSON.stringify(e),e=XXTEA.encryptToBase64(e,i),e="7005"+e}else e=JSON.stringify(e);return $.ajax({url:n,xhrFields:{withCredentials:r},method:"post",data:e})},apply:function(e,n,r){var i=new JsonpArr(e,n,r);i._addJsonp(),clearTimeout(t);var s=this;t=setTimeout(function(){s.call(i._arr)},10)},getId:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return n!=null?unescape(n[2]):null},setItem:function(e,t){var n=new Setcookie(e,t);n.SetItem()},getItem:function(e,t){return getItem(e,t)},back:function(){var e=window.location.href.split("/");e.splice(0,3,"");var t=encodeURI(e.join("/")),n="/login/login.html?back="+t;return n},nav:function(e){var t=window.location.pathname;return t.indexOf(e)>-1?!0:!1},dots:function(e){var t=api.getItem("wlbuser","id"),n={uid:t,act:e.act||1,name:e.name,pltf:e.pltf||"pc",ts:Date.parse(new Date)},r=$.extend({},n,e),i="wlh5_H5~h5#H5";r=JSON.stringify(r),r=XXTEA.encryptToBase64(r,i),r="7005"+r;var s="https://stat.wanglibao.com/activity?callback=?";return $.ajax({url:s,dataType:"jsonp",method:"get",data:{key:r}})}};JsonpArr.prototype={constructor:JsonpArr,_arr:[],_addJsonp:function(){var e={jsonrpc:"2.0",method:this.method,params:[{}],id:1};if(this.params)for(var t in this.params)e.params[0][t]=this.params[t];else e.params=[];this._arr.push(e),this._setJsonp()},_setJsonp:function(){var e=this._arr;for(var t=0;t<e.length;t++)e[t].id=t+1;this._setClr()},_setClr:function(){var e=this;setTimeout(function(){e._arr.length=0},this.time)}},Setcookie.prototype={constructor:Setcookie,SetItem:function(){if(!this.ispos)return"";localStorage.setItem(this.key,JSON.stringify(this.data))}},Ispos.prototype={constructor:Ispos,_ispos:function(){return window.localStorage?1:""}},module.exports={JsonRpc:api.JsonRpc,JsonpArr:api.JsonpArr,call:api.call,getId:api.getId,setItem:api.setItem,getItem:api.getItem,back:api.back,nav:api.nav,dots:api.dots},window.api={JsonRpc:api.JsonRpc,JsonpArr:api.JsonpArr,call:api.call,getId:api.getId,setItem:api.setItem,getItem:api.getItem,back:api.back,nav:api.nav,dots:api.dots}});