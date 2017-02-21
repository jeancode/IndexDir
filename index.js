
var fs = require("fs");

function indexDir(){
	this.file =  publicfile;
	this.dir  = publicdir;
}

publicdir = function(dirname,extencion,app){

	var imagesDir = __dirname + dirname;
	var dirimg = fs.readdirSync(imagesDir);
    
	for(var i = 0; i <= dirimg.length-1;i++){
    
    	if(dirimg[i].toString().search(extencion[0]) > - 1 || dirimg[i].toString().search(extencion[1]) > -1){
    
        app.get("/"+dirimg[i],function(req,res){
            setHeader(res);
            res.sendFile(imagesDir +"/"+req.route.path);
            
        });
   	}else{
        console.log("archivos invalidos");
    	}
           
        
	}
}

publicfile = function(ruta,public,app){
    var  value = false;
    for(var  i = 0 ;i <= filesPublic.length-1;i++){
        if(public  == filesPublic[i]){
                value = true;
        }
    }
    
    if(value==true){
        console.log("Existe Archivo montado");
    }else{
        
        var dir = __dirname + ruta;
        // dir = fs.readFileSync(dir,'utf-8');
        pushFilePublic(public);
        app.get("/"+public,function(req,res){
				setHeader(res);
                res.sendFile(dir);
            
            
        });

    }
        
}


module.export = indexDir();