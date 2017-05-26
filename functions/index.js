const functions = require('firebase-functions')
const people = require('./people')

exports.people = functions.https.onRequest(people)
