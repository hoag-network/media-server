const config = require('./config/config');
const Logger = require('./core/logger');

// Configuración de variables globales
global.gConfig = config;
global.Logger = Logger;
global.BasePath = __dirname;

const NodeMediaServer = require('./');
const CryptoJS = require("crypto-js");

var nms = new NodeMediaServer(config)
nms.run();

nms.on('prePublish', (id, StreamPath, args) => {

  var encrypted = CryptoJS.SHA256(config.passphrase+StreamPath).toString();
  var encshort = encrypted.substring(0,6);

  if(encshort != args["pwd"]){
    let session = nms.getSession(id);
    session.reject();
    console.log('[Rejected]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  } else {
    console.log('[Connected]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  }

});
