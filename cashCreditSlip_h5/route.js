define(["backbone","require"],function(){
    var Router = Backbone.Router.extend({
        routes : {
            "yindao" : "yindao",
            "jiekuan" : "jiekuan",
            "gengduo" : "gengduo",
            "huankuanwei" : "huankuanwei",
            "yinhangkashezhi":"yinhangkashezhi",
            "yinhangkajia":"yinhangkajia",
            "bangzhu":"bangzhu",
            "woyaohuankuan":"woyaohuankuan",
            "lijihuankuan":"lijihuankuan",
            "huankuanjilu":"huankuanjilu",
            "jiekuanxinxi":"jiekuanxinxi",
            "shenhes":"shenhes",
            "shenhec":"shenhec",
            "jiekuanji":"jiekuanji",
            "shenhez":"shenhez",
            "xiugaimi":"xiugaimi",
            "huoe":"huoe",
            "zhucezhang":"zhucezhang",
            "zhucemi":"zhucemi",
            "denglumi":"denglumi",
            "jiekuanzhu":"jiekuanzhu",
            "renzhengshiming":"renzhengshiming",
            "renzhenggeren":"renzhenggeren",
            "lianxirenxinxi":"lianxirenxinxi",
            "gongzuoxinxi":"gongzuoxinxi",
            "renzhengzhima":"renzhengzhima",
            "renzhengshouji":"renzhengshouji",
            "jiekuanxieyi":"jiekuanxieyi",
            "zhucexieyi":"zhucexieyi",
            "yunyingshangxieyi":"yunyingshangxieyi",
            "zhichika":"zhichika",
            "xiugaimima":"xiugaimima",
            "tankuang":"tankuang",
            "zhimayin":"zhimayin",
            "jiekuanzhong":"jiekuanzhong",
            "huankuanzhong":"huankuanzhong",
            "mineZH":"mineZH",
            "women":"women",
            "wechat":"wechat",
            "share":"share",
            "inform":"inform",
            "details":"details",
            "shareResult":"shareResult",
            "addBank":"add_bank"
        },
        yindao : function(){
            require(["modules/js/yindao"],function(yindao){
                yindao.render();
            })
        }, tankuang : function(){
            require(["modules/js/tankuang"],function(tankuang){
                tankuang.render();
            })
        },  zhimayin : function(){
            require(["modules/js/zhimayin"],function(zhimayin){
                zhimayin.render();
            })
        }, jiekuan : function(){
            require(["modules/js/home"],function(home){
                home.render();
            })
        }, jiekuanxinxi : function(){
            require(["modules/js/jiekuanxinxi"],function(jiekuanxinxi){
                jiekuanxinxi.render();
            })
        },shenhec : function(){
            require(["modules/js/shenhec"],function(shenhec){
                shenhec.render();
            })
        },shenhez : function(){
            require(["modules/js/shenhez"],function(shenhez){
                shenhez.render();
            })
        },jiekuanji : function(){
            require(["modules/js/jiekuanji"],function(huan){
                huan.render();
            })
        },huoe : function(){
            require(["modules/js/huoe"],function(huoe){
                huoe.render();
            })
        },zhichika : function(){
            require(["modules/js/zhichika"],function(zhichika){
                zhichika.render();
            })
        },shenhes : function(){
            require(["modules/js/shenhes"],function(shenhes){
                shenhes.render();
            })
        },jiekuanzhong : function(){
            require(["modules/js/jiekuanzhong"],function(jiekuanzhong){
                jiekuanzhong.render();
            })
        },huankuanzhong : function(){
            require(["modules/js/huankuanzhong"],function(huankuanzhong){
                huankuanzhong.render();
            })
        },zhucezhang : function(){
            require(["modules/js/zhucezhang"],function(zhucezhang){
                zhucezhang.render();
            })
        },denglumi : function(){
            require(["modules/js/denglumi"],function(denglumi){
                denglumi.render();
            })
        },zhucemi : function(){
            require(["modules/js/zhucemi"],function(zhucemi){
                zhucemi.render();
            })
        },xiugaimi : function(){
            require(["modules/js/xiugaimi"],function(xiugaimi){
                xiugaimi.render();
            })
        },
        huankuanwei : function(){
            require(["modules/js/huankuanwei"],function(huankuanwei){
                huankuanwei.render();
            })
        },jiekuanzhu : function(){
            require(["modules/js/jiekuanzhu"],function(jiekuanzhu){
                jiekuanzhu.render();
            })
        },renzhengshiming : function(){
            require(["modules/js/renzhengshimings"],function(renzhengshiming){
                renzhengshiming.render();
            })
        },renzhenggeren : function(){
            require(["modules/js/renzhenggeren"],function(renzhenggeren){
                renzhenggeren.render();
            })
        },renzhengzhima : function(){
            require(["modules/js/renzhengzhima"],function(renzhengzhima){
                renzhengzhima.render();
            })
        },renzhengshouji : function(){
            require(["modules/js/renzhengshouji"],function(renzhengshouji){
                renzhengshouji.render();
            })
        },
        bangzhu : function(){
            require(["modules/js/bangzhu"],function(bangzhu){
                bangzhu.render();
            })
        },
        lianxirenxinxi : function(){
            require(["modules/js/lianxirenxinxi"],function(lianxirenxinxi){
                lianxirenxinxi.render();
            })
        },
        gongzuoxinxi : function(){
            require(["modules/js/gongzuoxinxi"],function(gongzuoxinxi){
                gongzuoxinxi.render();
            })
        },  yinhangkajia : function(){
            require(["modules/js/yinhangkajia"],function(yinhangkajia){
                yinhangkajia.render();
            })
        },
        yinhangkashezhi : function(){
            require(["modules/js/yinhangkashezhi"],function(yinhangkashezhi){
                yinhangkashezhi.render();
            })
        },
        woyaohuankuan : function(){
			 require(["modules/js/woyaohuankuan"],function(woyaohuankuan){
			                woyaohuankuan.render();
			            })
        },
        lijihuankuan : function(){
			 require(["modules/js/lijihuankuan"],function(lijihuankuan){
			                lijihuankuan.render();
			            })
        },huankuanjilu : function(){
			 require(["modules/js/huankuanjilu"],function(huankuanjilu){
			                huankuanjilu.render();
			            })
        },jiekuanxieyi : function(){
			 require(["modules/js/jiekuanxieyi"],function(jiekuanxieyi){
			                jiekuanxieyi.render();
			            })
        },zhucexieyi : function(){
			 require(["modules/js/zhucexieyi"],function(zhucexieyi){
			                zhucexieyi.render();
			            })
        },
        yunyingshangxieyi :function(){
            require(["modules/js/yunyingshangxieyi"],function(yunyingshangxieyi){
                yunyingshangxieyi.render();
            })
        },
        xiugaimima:function(){
            require(["modules/js/xiugaimima"],function(xiugaimima){
                xiugaimima.render();
            })
        },
        gengduo : function(){
            require(["modules/js/mine"],function(mine){
                mine.render();
            })
        },
        mineZH : function(){
            require(["modules/js/mineZH"],function(mineZH){
                mineZH.render();
            })
        },
        women : function(){
            require(["modules/js/women"],function(women){
                women.render();
            })
        },
        wechat : function(){
            require(["modules/js/wechat"],function(wechat){
                wechat.render();
            })
        },
        share : function(){
            require(["modules/js/share"],function(share){
                share.render();
            })
        },
        inform : function(){
            require(["modules/js/inform"],function(inform){
                inform.render();
            })
        },
        details:function(){
            require(["modules/js/details"],function(details){
                details.render();
            })
        },
        shareResult:function(){
            require(["modules/js/shareResult"],function(shareResult){
                shareResult.render();
            })
        },
        add_bank:function(){
            require(["modules/js/add_bank"],function(add_bank){
                add_bank.render();
            })
        }
        
        
    })
    return new Router();
})
