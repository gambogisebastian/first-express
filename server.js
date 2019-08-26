// cargar el módulo express
const express = require('express');

// crear la app express
const app = express();

// definir una ruta de raíz directamente en la app
// después se mostará como hacerlo con buenas prácticas
app.get('/', function(req, res) {
    res.send('<h1>Holaisito</h1>');
});

// decirla a la app que escuche en el puerto 3000
// si llega una petición http desde el buscador del cliente
app.listen(3000, function() {
    console.log('escuchando en puerto 3000');
});
