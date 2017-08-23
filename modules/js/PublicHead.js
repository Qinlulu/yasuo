define(["jquery","pageUrl","text!modules/str/PublicHead.html"],
    function($,pageUrl,html){
        function render(headt , remove ) {
            $ ( ".head" ).html ( html );
            if ( headt ) {
                $ ( ".headt" ).html ( headt )
            }
            if ( remove ) {
                if ( remove == "remove" ) {
                    $ ( ".back" ).html ( "" )
                    $ ( ".back" ).removeClass ( "back" )
                }

            }

            $ ( ".back" ).on ( "click" , function () {
                if ( $ ( ".renzhengshouji" ).length == 1 || $ ( ".renzhengzhima" ).length == 1 ) {
                    window.location.href = "#HomePage"
                } else {
                    $ ( ".main" ).css ( "height" , "100%" )
                    window.history.back ()
                }

            } )



        }
        return {
            render: render
        }
    })