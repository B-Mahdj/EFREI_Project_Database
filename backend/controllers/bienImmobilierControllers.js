const mysql = require('../database/database');

exports.getAllBienImmobilier = (req, res, next) => {
    mysql.query('SELECT * FROM Bien_immobilier', (err, rows, fields) => {
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

exports.createBienImmobilier = (req, res, next) => {
    console.log("fonction create");
    const nb_piece = req.body.nbChambre;
    const superficie = req.body.superficie;
    const prix_vente = req.body.prix;
    const date_disponibilite = req.body.date;
    const etat = req.body.etat;
    const type_bien = req.body.type;
    const adresse = req.body.adresse;
    const id_proprietaire = parseInt(req.body.proprio.chartAt(0));
    const nbGarage = req.body.nbGarage;
    if(disponibilite && nb_piece && superficie && prix_vente && date_disponibilite && etat && type_bien && adresse && id_proprietaire){
        mysql.query('INSERT INTO Bien_immobilier VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [true, nb_piece, superficie, prix_vente, date_disponibilite, etat, type_bien, adresse, id_proprietaire, nbGarage], (err, result) => {
            if (!err) {
                console.log("Bien crée");
                res.status(200).json({
                    message: 'Bien immobilier créé !'
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

exports.getBienImmobilierById = (req, res, next) => {
    id = req.query.id;
    console.log(req);
    if (id) {
        mysql.query('SELECT * FROM Bien_immobilier WHERE id_bien_immobilier = ?', [id], (err, rows, fields) => {
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
    else {
        res.status(500).json({
            message: 'Veuillez remplir tous les champs !'
        });
    }
}

exports.updateBienImmobilierById = (req, res, next) => {
    id = req.query.id;
    disponibilite = req.query.disponibilite;
    nb_piece = req.query.nb_piece;
    superficie = req.query.superficie;
    prix_vente = req.query.prix_vente;
    date_disponibilite = req.query.prix_vente;
    id_etat = req.query.id_etat;
    type_bien = req.query.type_bien;
    id_adresse = req.query.id_adresse;
    id_proprietaire = req.query.id_proprietaire;
    if(disponibilite && nb_piece && superficie && prix_vente && date_disponibilite && id_etat && type_bien && id_adresse && id_proprietaire){
        mysql.query('UPDATE Bien_immobilier SET disponibilite = ?, nb_piece = ?, superficie = ?, prix_vente = ?, date_disponibilite = ?, id_etat = ?, type_bien = ?, id_adresse = ?, id_proprietaire = ? WHERE id_bien_immobilier = ?', [disponibilite, nb_piece, superficie, prix_vente, date_disponibilite, id_etat, type_bien, id_adresse, id_proprietaire, id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Bien immobilier modifié !'
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

exports.deleteBienImmobilierById = (req, res, next) => {
    id = req.query.id;
    if (id) {
        mysql.query('DELETE FROM Bien_immobilier WHERE id_bien_immobilier = ?', [id], (err, result) => {
            if (!err) {
                res.status(200).json({
                    message: 'Bien immobilier supprimé !'
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
