// servidor HTTP
const http = require('http');
const   fs = require('fs');
// el archivo de abajo es el archivo que necesitas crear en esta asignación.
// ¡NOTA! El "." en la ruta del archivo de abajo se refiere a la ubicación del archivo actual, en este caso
// el archivo es app.js. Además, la ruta "./static.js" se refiere a un archivo llamado static.js
const static_contents = require('./static.js');
//
//crea un servidor
server = http.createServer(function (request, response){
  static_contents(request, response);  //eso servirá todos los archivos estáticos automáticamente
});
server.listen(8000);
console.log("Running in localhost at port 8000");

