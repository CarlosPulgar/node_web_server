const { log } = require("console");
const express = require("express");
const path = require("path");

const startServer = (options) => {
    const { port, public_path = "public"} = options

    const app = express();

    //para poder usar los midlewares se usa la pálabra ¡ use ! nativa de express
    app.use(express.static(public_path)) // contenido estatico que ponemos disponible 

    app.get('*',(req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`);
        res.sendFile(indexPath)
    }) 

  app.listen(port,()=>{
    console.log("escuchando en puerto 3100");
    
  })
    
}


module.exports = {
    startServer
}