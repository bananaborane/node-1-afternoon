const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const mc = require('./controller/message_controller')

app.use(bodyParser.json());

app.use( express.static( __dirname + '/../public/build' ) );



app.post('/api/messages', mc.create);

app.get('/api/messages', mc.read);

app.put('/api/messages/:id', mc.update);

app.delete('/api/messages/:id', mc.delete);













app.listen(port, ()=>{console.log(`listening at the following port: ${port}`)});







