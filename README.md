# Software Avanzado Tarea 2
_Uso de microservicios para la simulacion de un piloto, cliente y rastreo de la aplicacion Uber.
Los Microservicios fueron creados en nodejs con la ayuda de la libreria cote._
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

