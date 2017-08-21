define(["backbone","require"],function(){
    var Router = Backbone.Router.extend({
        routes: {
            "guidance":"guidance",
            "Loginphone":"Loginphone"
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
        }
    });
    return new Router();
})
