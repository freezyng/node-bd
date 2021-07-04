var express = require('express');

var app = express();

var artists = [
    {
        id: 1,
        name: '1ololo sosli'
    },
    {
        id: 2,
        name: '2ololo sosli'
    },
    {
        id: 3,
        name: '3ololo sosli'
    }
]

app.get('/', function(req, res){
    res.send('rrrrrrrr');
})

app.get('/artists', function(req, res){
    res.send(artists);
})

app.get('/artists/:id', function(req, res){
    res.send('test');
})

app.listen(3012, function(){
    console.log('API app started')
})