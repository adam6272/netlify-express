'use strict';

const app = require('./express/server');

app.listen(443, () => console.log('Local app listening on port 3000!'));