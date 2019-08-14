//Objeto Usuario el cual simula su usuario existente y datos
let usuario = new Object();
usuario.nombre = "probando";
usuario.origen="";
usuario.destino="";
usuario.vacio=true;
//Objeto piloto, este simula los datos del piloto
let piloto = new Object();
piloto.nombre="Pedro";
piloto.edad=25;
piloto.ubicacion="Descanso Uber";
piloto.vacio=true;
console.log(piloto.nombre);
//Exportamos esta informacion para que sea nuestro origen de datos simulado
module.exports = {
    user : usuario,
    piloto: piloto
}