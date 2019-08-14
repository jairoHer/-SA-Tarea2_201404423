/*
*cote es la libreria instalada con npm que facilita 
*la creacion de microservicios en node js
*/
const cote = require('cote');
const requester = new cote.Requester({ name: 'ESB' });

//aqui se ingresa el nombre del serivicio y los datos que se enviaran al servicio
const request = { type: 'solicitar_viaje',nombre:'Manuel', origen: 'miraflores', destino: 'el trebol' };

//aqui se realiza la peticion y se muestra en consola la respuesta
requester.send(request, (res) => {
    console.log(res);
});