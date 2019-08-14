# Software Avanzado Tarea 2
_Uso de microservicios para la simulacion de un piloto, cliente y rastreo de la aplicacion Uber.
Los Microservicios fueron creados en nodejs con la ayuda de la libreria cote._
## Video demostrativo
[![Video de demostracion, presione click](https://img.youtube.com/vi/TadBTuP_0FI/0.jpg)](https://www.youtube.com/watch?v=TadBTuP_0FI "Everything Is AWESOME")
## Tabla de contenido

- [Requisitos](#Requisitos).
- [Instalación Nodejs y npm](#Instalación-Nodejs-y-npm).
- [instalacion de libreria cote](#instalacion-de-libreria-cote).
- [Funcionamiento de la aplicacion](#Funcionamiento-de-la-aplicacion).

## Requisitos
_Herramientas utilizadas para el funcionamiento de la aplicacion_
* [Nodejs](https://nodejs.org/es/download/) - Herramienta para manejo de javascript
* [npm](https://nodejs.org/es/download/) - Se instala junto nodejs, es su gestor de paquetes
* [cote](https://github.com/dashersw/cote) - Usado para generar RSS
### Instalación Nodejs y npm
_varia segun el sistema operativo que se utilice, en este caso fue elaborado en windows
asi que para instalarlo se debe descargar el instalador de la pagina oficial https://nodejs.org/es/download/
al seleccionar la arquitectura de su computadora iniciara automaticamente la descarga._
_La instalacion en windows es muy sencilla, basicamente es darle "siguiente" a todas las ventanas, siempre
estando pendiente de seleccionar la opcion de instalar npm durante la instalacion._

_Para verificar que la instalacion fue correcta se debe abrir la consola de windows y escribir:_
```
node -v
```
_esto desplegara en la consola la version de nodejs instalada._
```
npm -v
```
_Esto desplegara en consola la version de npm instalada._
### instalacion de libreria cote
_Para instalar la libreria cote primero se debe crear una carpeta en donde estara el codigo js de la aplicacion_
_Luego se debe ejecutar el siguiente comando npm para agregar el package.json del proyecto_
```
npm init -y
```
_El package contiene todas las librerias y paquetes npm que usa la aplicacion para su funcionamiento
_Luego se debe instalar la libreria cote con el comando:_
```
npm install cote --save
```
_Esto instala el cote de manera local en el directorio del proyecto. el --save agrega el paquete instalado a package.json._

## Funcionamiento de la aplicacion
_La aplicacion consiste en la creacion de 3 clientes y sus respectivos servicios los cuales estan el archivo cliente_uber_service.js_
_Para poder usar la libreria cote se debe colocar su respectivo require al inicio del .js_
```
const cote = require('cote');
```
_En el caso de ser un cliente se debe definir que es un requester y asignarle un nombre con el que se identificara
con los servicios_
```
const requester = new cote.Requester({ name: 'Nombre' });
```
_Para mandar informacion al servidor debe identificar el servicio que quiere utilizar y los datos que desea mandar_
```
const request = { type: 'piloto', ubicacionActual: 'Zona1', nombre: 'Pedro', Costo: 10 };
```
_Es importante destacar que el 'type' debe indicar el nombre del microservicio de lado del servidor._
_Despues se manda la informacion indicada anteriormente y se despliega en consola la respuesta del servidor_
```
requester.send(request, (res) => {
    console.log(res);
});
```
_Para la creacion de los servicios se debe realizar la importacion de la libreria cote de la misma forma que de los clientes._Despues
```
const cote = require('cote');
```
_Se debe especificar el nombre del servidor que manejara los servicios._
```
const responder = new cote.Responder({ name: 'ESB' });
```
_La palabra "Responder" sirve indicar que este sera el servidor que atienda las peticiones de los clientes._

_Para crear un microservicio primero se debe verificar que el nombre de este sea igual al indicado por su cliente que
quiere acceder a el. Este nombre es el primer parametro del servicio._
_Como segundo parametro recibe el request desde el cliente._
_El cuerpo de la funcion son las operaciones que realizara el microservicio con la informacion brindada por el cliente.
Despues de realizar la operacion se le envia una respuesta al cliente._
```
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
```