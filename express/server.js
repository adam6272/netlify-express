'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
let control = {
    "walgreens": {
        locations: {
            "20876": false
        }
    }
};
router.get('/demo', (req, res) => {
    res.set("Access-Control-Allow-Origin", "*")
  res.send(JSON.stringify(control))
})
router.get('/demoControlTrue', (req, res) => {
    control.walgreens.locations["20876"] = true;
    res.send('Switched to true!')
})
router.get('/demoControlFalse', (req, res) => {
    control.walgreens.locations["20876"] = false;
    res.send('Switched to false!')
})

module.exports = app;
module.exports.handler = serverless(app);