const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const addRequestId = require('express-request-id');

const app = express();

app.use(addRequestId());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log("Request received");
    res.send("hello world");
})

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), ()=> {
    console.log(`Server Started at ${app.get('port')}`);
});

module.exports = app;