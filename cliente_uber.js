const cote = require('cote');
const requester = new cote.Requester({ name: 'ESB' });

//const request = { type: 'solicitar_viaje', from: 'usd', to: 'eur', amount: 1000 };
const request = { type: 'solicitar_viaje',nombre:'Manuel', origen: 'miraflores', destino: 'el trebol' };
requester.send(request, (res) => {
    console.log(res);
});