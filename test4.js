const express = require('express');
var sql = require('mysql');
const app = express();
var connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expjsdb'});
    connection.connect();
    app.get('/', function (req, res) {
        var x = req.query;
        var data = connection.query('INSERT INTO tab1 VALUES (?,?)', x.uid,x.uname ,function (err, results, fields) {
            console.log(results);
            res.status(200).send(results);
        });
    });
    app.listen(3000, function () {
        console.log("http://localhost:3000");
    });