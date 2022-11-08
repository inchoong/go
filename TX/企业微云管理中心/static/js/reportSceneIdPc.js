;(function($,win,undefined){
    try{
        if(window.sessionStorage ){
            var storage= window.sessionStorage;
            if(!window.sessionStorage.scene_id){
                var scene_id = TOOL.getUrlParam("scene_id");
                if(scene_id){
                    storage.scene_id = scene_id;
                }else{
                    storage.scene_id ="";
                }
            }
        }
    }catch(e){
        window.console && console.debug && console.debug(e);
    }
    $(document).ready(function(){
        setTimeout(reprotPcSceneid,0)
    })
})(jQuery,window);
function reprotPcSceneid(){
    try{
        var report={};
        report.scene_id="";
        var urlparameters ="";
        urlparameters = window.location.search;
        urlparameters =urlparameters.replace("?", "");
        if(window.sessionStorage ){
            if(window.sessionStorage.scene_id){
                report.scene_id = window.sessionStorage.scene_id;
            }
        }
        if(report.scene_id ==""){
            report.scene_id =TOOL.getUrlParam("scene_id");
        }

        if(report.scene_id){
            clicSceneid({extParam:report.scene_id});
        }
        else{
            clicSceneid({pgUserType:urlparameters});
        }
    }catch(e){
        window.console && console.debug && console.debug(e);
    }
}
function clicSceneid(obj){
    if(typeof pgvMain === 'function'){
        pgvMain(obj);
    }
}

