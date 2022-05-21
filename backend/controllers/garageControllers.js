const mysql = require('../database/database');

exports.getAllGarage = (req, res, next) => {
    mysql.query('SELECT * FROM Garage', (err, rows, fields) => {
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