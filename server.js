const express = require("express");
const app = express();

const port = 443
let control = {
    "walgreens": {
        locations: {
            "20876": false
        }
    }
};
app.get('/demo', (req, res) => {
    res.set("Access-Control-Allow-Origin", "*")
  res.send(JSON.stringify(control))
})
app.get('/demoControlTrue', (req, res) => {
    control.walgreens.locations["20876"] = true;
    res.send('Switched to true!')
})
app.get('/demoControlFalse', (req, res) => {
    control.walgreens.locations["20876"] = false;
    res.send('Switched to false!')
})
app.listen(port, () => {
  console.log(`Started app`)
})