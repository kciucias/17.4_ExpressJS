var express = require('express');
var app = express();
app.use(express.static('assets'));

app.get('/', function (req, res) {
	//wysyla w odpowiedzi plik (zamiast wiadomosci)
    res.sendFile('/index.html');
});
//nowy obiekt response, wlasciwosci: 
//dane ktore otrzymamy w obiekcie request
app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
//wystwietlamy obiekt przetworzony na typ string
//za pomoca metody JSON.stringify
    res.end(JSON.stringify(response));
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});


app.listen(3000);

