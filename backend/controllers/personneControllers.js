const mysql = require('../database/database');

exports.getAllPersonne = (req, res, next) => {
    mysql.query('SELECT * FROM Personne', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows);
            console.log(rows);
        }
        else {
            res.status(500).json(err);
            console.log(err);
        }
    });
}