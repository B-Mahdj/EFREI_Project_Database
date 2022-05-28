const mysql = require('../database/database');

exports.getAllTransaction = (req, res, next) => {
    mysql.query('SELECT * FROM Transaction', (err, rows, fields) => {
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

exports.createTransaction = (req, res, next) => {
    commission = req.query.commission;
    prix_vente = req.query.prix_vente;
    date_transac = req.query.date_transac;
    id_client = req.query.id_client;
    id_proprietaire = req.query.id_proprietaire;
    if ( commission && prix_vente && date_transac && id_client && id_proprietaire) {
        mysql.query('INSERT INTO Transaction VALUES (?, ?, ?, ?, ?)', [commission, prix_vente, date_transac, id_client, id_proprietaire], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Transaction créée !'
                });
            }
            else {
                res.status(500).json(err);
            }
        });
    }
    else {
        res.status(500).json({
            message: 'Veuillez remplir tous les champs !'
        });
    }
}

exports.getCountFromTransaction = (req, res, next) => {
    mysql.query('SELECT COUNT(*) FROM Transaction', (err, rows, fields) => {
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


exports.getSumPriceFromTransaction = (req, res, next) => {
    mysql.query('SELECT SUM(prix_vente) FROM Transaction', (err, rows, fields) => {
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

exports.getSumOfCommission = (req, res, next) => {
    mysql.query('SELECT SUM(commission) FROM Transaction', (err, rows, fields) => {
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

exports.getDateLastTransaction = (req, res, next) => {
    mysql.query('SELECT date_transac FROM Transaction ORDER BY date_transac DESC LIMIT 1', (err, rows, fields) => {
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