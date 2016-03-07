//(function($)
//{ 
//	$.fn.hoverFade=function(options)
//	{
//	   //options est donc un objet littéral, ne l'oublions pas !
//           
//           //On définit nos paramètres par défaut
//           var defauts=
//           {
//               "vitesseFadeOut": "slow",
//               "vitesseFadeIn": "fast"
//           };  
//           
//           //On fusionne nos deux objets ! =D
//           var parametres=$.extend(defauts, options); 
//           
//           return this.each(function()
//	   {
//		//On accèdera à la vitesse du fadeOut via parametres.vitesseFadeOut
//                //et à celle du fadeIn via parametres.vitesseFadeIn
//              
//                //On veut que l'élément change au passage de la souris, on utilise donc mouseover() !
//                $(this).mouseover(function()
//                {
//                    //On diminue donc l'opacité lentement
//                    $(this).fadeOut(parametres.vitesseFadeOut,function()
//                    {
//                       //Une fois l'élément invisible, on le fait réapparaître rapidement !
//                       $(this).fadeIn(parametres.vitesseFadeIn);
//                    });
//                });
//	   });						   
//	};
//})(jQuery);

//window.ziglaRichText = (function($) {
//    alert('ok');
//
//    //On définit nos paramètres par défaut
//    var default_values =
//    {
//        "vitesseFadeOut": "slow",
//        "vitesseFadeIn": "fast"
//    }; 
//    
//    var test = "test";
//    
//    
//    
//})(jQuery);

var ziglaRichText = (function ($) {  
    // private
    $('#test')
    //On définit nos paramètres par défaut
    var default_values = {
        selector : "body",
        width: 600,
        height: 300,
        lang : "fr",
        content_css: "css/content.css",
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons"
    };  
    
    function inject(parametres){
        var str = parametres.selector;
        
        if (str.indexOf('#') == 0) {
            var array = str.split("#");
            $('#' + array[1]).css("background-color", "red");
        }else if (str.indexOf('.') == 0) {
            var array = str.split(".");
            $('.' + array[1]).css("background-color", "red");
        }else{
            $(str).css("background-color", "red");
        }
        
        
//        if(newstring[0] == "#"){
//            $('#' + newstring[1]).css("background-color", "red");
//        }else if(newstring[0] == "."){
//            $('.' + newstring[1]).css("background-color", "red");
//        }else{
//            $(newstring[1]).css("background-color", "red");
//        }
        
        console.log("parametresSelector :" +array);
        
    }

    return {
        //public
        init : function (options) {
            //On fusionne les defaults values et les options passés en paramètres 
            var parametres = $.extend(default_values, options); 
            
            //Listes les paramètres
            for(var key in parametres) {
                var value = parametres[key];
                
                console.log(value);
            }
            console.log("Selecteur :" +parametres.selector);
            //Appel de la fonction qui injecte le contenu dans le DOM
//                        $('#test').css("background-color", "red")

            inject(parametres);
        } 
    }
    
//    var parametres = $.extend(default_values, init); 
    
//    var parametres=$.extend(default_values, init); 
//    alert(parametres.selector)
    
       //On fusionne nos deux objets ! =D
           
    
//    window["mafonction"] = function () {
//       alert("zz");
//    };
//    

    
}(jQuery));


    

//ziglaRichText.init();




//$(function(){
//
//    window['x'] = 37;
//    
//    window['toto'] = function (c) {
//        alert("bouh " + c);
//    };
//    
//});
//
//$(function(){
//
//    toto(x + x);
//    
//
//});
//
//
//
//
//
//
//
//var GLOB = (function () {  
//    
//    // private
//    var c = 88;
//    
//    window["mafonction"] = function () {
//       alert("zz");
//    };
//    
//
//    
//    return {
//        titi : function () {
//            //mafonction();
//            alert("xxx " + c);
//        }
//    }
//}());
//
//
//
//GLOB.titi();
//
//
//mafonction();

