const cote = require('cote');
const datos = require('./datos.js');
const responder = new cote.Responder({ name: 'ESB' });

const rates = { usd_eur: 0.91, eur_usd: 1.10 };

let usuario;
let viaje = false;
let origen ="";
let datosPiloto=false;


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

responder.on('rastreo',(req,cb)=>{
    if(datos.piloto.vacio==true){
        cb('No hay pilotos conectados');
    }else{
        cb('El piloto:'+datos.piloto.nombre+" se encuentra en: "+datos.piloto.ubicacion);
    }
    
    
});


