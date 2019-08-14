const cote = require('cote');
const requester = new cote.Requester({ name: 'UBER' });

const request = { type: 'piloto', ubicacionActual: 'Zona1', nombre: 'Pedro', Costo: 10 };

requester.send(request, (res) => {
    console.log(res);
});