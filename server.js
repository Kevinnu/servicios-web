const express = require('express');
const { productos, productoRandom } = require('./controllers/index');
const app = express();
const PORT = 8080;

app.get('/productos', (req, res) => {
    res.send(container.productos());
});

app.get('/productoRandom', (req, res) => {
    res.send(container.productoRandom());
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on("error", error => { console.log(`El errore es: ${error}`); });
