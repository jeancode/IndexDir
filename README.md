# IndexDir
Publica directorios o archivos completos  para nodejs

var app = require("express")();

var indexdir = require("indexdir");


#para hacer publico un archivo 

var rutadeArchivo = __dirname+"/images/icon.png;

var rutapublica = "icon.png"  https://miweb/icon.png

index.file(rutadeArchivo,"icon.png",app);

#Para hacer publica una carpeta

var carpeta = __dirname+"/images"; 

var formatos = ['png'];

indexdir.dir(carpeta,formatos,app);

