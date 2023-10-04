const express = require('express');
const router = express.Router();

const impayeController = require('../controllers/impayes.controller');

router.get('/impayes', impayeController.getAllImpayes);

router.post('/impayes', impayeController.createImpaye);

router.patch('/impayes/:id', impayeController.updateImpayeById);

router.delete('/impayes/:id', impayeController.deleteImpayeById);

module.exports = router;
