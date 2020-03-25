const express = require('express');

const OngController = require('./App/controllers/OngController');
const IncidentController = require('./App/controllers/IncidentController');
const ProfileController = require('./App/controllers/ProfileController');
const SessionController = require('./App/controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store) 

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/profiles', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.store)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;