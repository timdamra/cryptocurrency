const app = require('../app')
const functions = require('firebase-functions')

exports.mainApp = functions.https.onRequest(app)
