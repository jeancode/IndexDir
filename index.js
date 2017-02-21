
var fs = require("fs");
var indexdir = function () { // 1

    this.dir= dir;
	this.file = file;
	
	
}


function dir(dirname,extencion,app){
	
	var imagesDir = dirname;
	var dirimg = fs.readdirSync(imagesDir);
	
	
	
	for(var i = 0; i <= dirimg.length-1;i++){
    
    if(dirimg[i].toString().search(extencion[0]) > - 1 ){
    
		console.log(dirimg[i].toString());
		
        app.get("/"+dirimg[i],function(req,res){
            
            res.sendFile(imagesDir +"/"+req.route.path);
            
        });
    }else{
        console.log("archivos invalidos");
    }
           
        
	}
}



function file(ruta,public,app){

        var dir =  ruta;
       		
        app.get("/"+public,function(req,res){

                res.sendFile(dir);
            
            
        });

    
        
}





module.exports = new indexdir; //2
