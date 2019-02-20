const functions = require('firebase-functions')
const express = require('express')
const app = require('../app')

console.log(app)

exports.mainApp = functions.https.onRequest(app)
