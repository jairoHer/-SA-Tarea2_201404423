const cote = require('cote');
const requester = new cote.Requester({ name: 'Rastreo' });

const request = { type: 'rastreo', from: 'usd', to: 'eur', amount: 1000 };

requester.send(request, (res) => {
    console.log(res);
});