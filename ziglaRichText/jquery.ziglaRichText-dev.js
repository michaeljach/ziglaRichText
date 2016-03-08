var ziglaRichText = (function ($) {  
    // private    
    var $head = $('head');
    var $body = $('body');
    
    
    
    var currentScriptPath = function () {
        var scripts = document.querySelectorAll( 'script[src]' );
        var currentScript = scripts[ scripts.length - 1 ].src;
        var currentScriptChunks = currentScript.split( '/' );
        var currentScriptFile = currentScriptChunks[ currentScriptChunks.length - 1 ];

        return currentScript.replace( currentScriptFile, '' );
    }
    
    //alert(currentScriptPath());
    var get_local_path = '';
    
    //On définit nos paramètres par défaut
    var default_values = {
        selector : "body",
        width: '100%',
        height: '300px',
        theme : 'modern',
        lang : "fr_FR",
        content_css: "css/content.css",
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons"
    };  
    
    var app_parameters = (function (parametres){
        
        //Emplacement des fichiers
        var location_files = {
            theme : '<link rel="stylesheet" href="'+currentScriptPath()+'themes/'+parametres.theme+'/'+parametres.theme+'.css">',
            icons : '<link rel="stylesheet" href="'+currentScriptPath()+'icons/font-awesome-4.5.0/css/font-awesome.min.css">',
            lang : '<link rel="stylesheet" href="'+currentScriptPath()+'langs/'+parametres.lang+'.js">',
        }
        $head.append(location_files.theme);
        $head.append(location_files.icons);
        $body.append(location_files.lang);

        
        
        //Selecteur renseigné en paramètre --> Le contenu apparaitra dans ce selecteur
        var selector = parametres.selector,
            selector_html = null;
        
        if (selector.indexOf('#') == 0) {
            console.log('#');
            var array = selector.split("#");
            selector_html = $('#' + array[1]);
        }else if (selector.indexOf('.') == 0) {
            console.log('.');
            var array = selector.split(".");
            selector_html = $('.' + array[1]);
        }else{
            console.log('rien');
            selector_html = $(selector);
        }
        console.log("parametresSelector :" +selector_html);
        
       
        
        var toolbar_item = (function (){
            var toolbar_parameters = parametres.toolbar.split(/(?: |\|)/g);
//            for(var i = 0; i<toolbar_parameters.length ; i++){
//                console.log('toolbar_parameters :' +toolbar_parameters[i]);
//            }
            return toolbar_parameters;
        });
        toolbar_item = toolbar_item();
        
        var toolbar_items = "";
        for(var i = 0; i<toolbar_item.length ; i++){
            if(i == toolbar_item.length-1){
                toolbar_items+='<button class="ziglaRichText_btn" type="button" onClick="i'+toolbar_item[i]+'()" title="'+toolbar_item[i]+'">\
                                    <img src="'+currentScriptPath()+'themes/'+parametres.theme+'/icons/40x40/'+toolbar_item[i]+'.PNG" alt="icone '+toolbar_item[i]+'">\
                                </button>'; 
//                toolbar_items+=toolbar_item[i]; 
            }else{
                toolbar_items+='<button class="ziglaRichText_btn" type="button" onClick="i'+toolbar_item[i]+'()" title="'+toolbar_item[i]+'">\
                                    <img src="'+currentScriptPath()+'themes/'+parametres.theme+'/icons/40x40/'+toolbar_item[i]+'.PNG" alt="icone '+toolbar_item[i]+'">\
                                </button>'+' ';  
            }
        }
        
                        
                
        
        selector_html.append('\
                <div class="pc-properties-panel-body-wysiwyg" style="width:'+parametres.width+' !important;">\
                    <div class="pc-properties-panel-body-wysiwyg-head">\
                        <div class="pc-properties-panel-body-wysiwyg-head-container-items-right">\
                            <div class="pc-properties-panel-body-wysiwyg-head-container-items-right-item active-item">\
                                Visuel\
                            </div>\
                            <div class="pc-properties-panel-body-wysiwyg-head-container-items-right-item">\
                                Texte\
                            </div>\
                        </div>\
                    </div>\
                    <div class="row"></div>\
                    <div class="pc-properties-panel-body-wysiwyg-sub-head">\
                        Fichier\
                    </div>\
                    <div class="pc-properties-panel-body-wysiwyg-options-text">\
                        '+toolbar_items+'\
                    </div>\
                    <textarea style="display:none;" name="myTextArea" id="myTextAreaj" cols="100" rows="14"></textarea>\
                    <iframe name="richTextField" style="height:'+parametres.height+' !important;" id="body-wysiwyg-text-editable-content" class="pc-properties-panel-body-wysiwyg-text-editable-content" frameborder="0" allowtransparency="true" title="Zone de texte enrichi""></iframe>\
                    <div class="pc-properties-panel-body-wysiwyg-indicator-baslise-text">\
                        p\
                    </div>\
                </div>\
        ');
        
        //Active la modification du style de l'iframe
        function iFrameOn(){richTextField.document.designMode = 'On';}
        iFrameOn();
        
        //Ajout d'attribut CSS et JS à l'iframe injecté
        var $head_iframe = $("#body-wysiwyg-text-editable-content").contents().find("head");
        var $body_iframe = $("#body-wysiwyg-text-editable-content").contents().find("body");
        $head_iframe.append(location_files.theme);
                
        $body_iframe.attr({
            contenteditable: "true",
            class : "pc-properties-panel-body-wysiwyg-text-editable-content-body",
            id : "",
        }).append('Tapez votre texte ici');
        
        
        
    });

    return {
        //public
        init : function (options) {
            //On fusionne les defaults values et les options passés en paramètres 
            var parametres = $.extend(default_values, options); 
            
            //Listes les paramètres
            for(var key in parametres) {
                var value = parametres[key];
//                console.log(value);
            }
//            console.log("Selecteur :" +parametres.selector);
            app_parameters(parametres);
        } 
    }
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
