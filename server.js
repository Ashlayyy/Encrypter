const express = require('express')
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));

app.get('/', function(req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/js', express.static('./src/js'));
app.use('/css', express.static('./src/css'));
app.use('/data', express.static('./src/data'));
app.use('/src', express.static('./src'));

app.listen(8002, () => {
  console.log(`App listening on port 8002`)
});