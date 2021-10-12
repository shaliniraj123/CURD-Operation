const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add/question
 *  @method GET /add-question
 */
route.get('/add-question', services.add_question)

/**
 *  @description for update question
 *  @method GET /update-question
 */
route.get('/update-question', services.update_question)


// API
route.post('/api/question', controller.create);
route.get('/api/question', controller.find);
route.put('/api/question/:Q.no', controller.update);
route.delete('/api/question/:Q.no', controller.delete);


module.exports = route