const functions = require('firebase-functions');
const app = require('./app')

exports.mainApp = functions.https.onRequest(app)
