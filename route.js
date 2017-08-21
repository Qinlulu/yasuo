define(["backbone","require"],function(){
    var Router = Backbone.Router.extend({
        routes: {
            "guidance":"guidance",
            "Loginphone":"Loginphone",
            "Loginpassword":"Loginpassword",
        },
        guidance:function () {
            require(["guidance"], function (guidance) {
                guidance.render();
            })
        },
        Loginphone:function () {
            require(["Loginphone"], function (Loginphone) {
                Loginphone.render();
            })
        },
        Loginpassword:function () {
            require(["Loginpassword"], function (Loginpassword) {
                Loginpassword.render();
            })
        }
    });
    return new Router();
})
