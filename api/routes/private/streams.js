const express = require('express');
const streamController = require('../../controllers/streams');

module.exports = (context) => {
  let router = express.Router();
  router.get('/creds', streamController.genStreams.bind(context));
  router.post('/trans', streamController.postStreamTrans.bind(context));
  router.delete('/:app/:stream', streamController.delStream.bind(context));
  return router;
};
