/*
*cote es la libreria instalada con npm que facilita 
*la creacion de microservicios en node js. Tambien 
*se importa datos.js el cual ayuda en la persistencia 
*de la informacion ingresada
*/
const cote = require('cote');
const datos = require('./datos.js');
const responder = new cote.Responder({ name: 'ESB' });

//variables que facilitaran el acceso a la informacion
//se usan debido a la falta de un origen de datos consistente.
let usuario;
let viaje = false;
let origen ="";
let datosPiloto=false;

//Servicio al que accede el usuario de uber
responder.on('solicitar_viaje', (req, cb) => {

    console.log(datos.user.nombre)
    datos.user.nombre = req.nombre
    console.log(datos.user.nombre);
    cb('viaje confirmado para '+req.nombre);
    datos.user.vacio==false;
    viaje=true;
    usuario = req.nombre;
    origen=req.origen;
    viaje = true;

});

//Servicio al que accede el piloto de uber
responder.on('piloto',(req,cb)=>{
    datosPiloto.vacio=false;
    datosPiloto=true;

    if(viaje===false){
        cb('No hay solicitudes de viajes');
    }else{
        console.log("lugar Actual: "+req.ubicacionActual+" ubicacion usuario: "+origen)
        datos.piloto.ubicacion=req.ubicacionActual;
        datos.piloto.vacio=false;
        cb('solicitud de viaje de: '+usuario);
    }
});

//servicio al que accede el sistema de rastreo de uber
responder.on('rastreo',(req,cb)=>{
    if(datos.piloto.vacio==true){
        cb('No hay pilotos conectados');
    }else{
        cb('El piloto:'+datos.piloto.nombre+" se encuentra en: "+datos.piloto.ubicacion);
    }
    
    
});


