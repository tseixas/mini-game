const express = require('express');
const app = express();
const playerRoutes = express.Router();

//let Player = require('../models/Player');

let players = [];

playerRoutes.route('/add').post(function (req, res) {
    if (req.body) {
        players.push(req.body);
        return res.status(200).json({ 'msg': 'Success', 'status': 200 });
    } else {
        return res.status(400).json({ 'msg': 'Error', 'status': 400 });
    }

    /*let player = new Player(req.body);
    player.save()
      .then(player => {
        res.status(200).json({'player': 'player in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });*/
});

playerRoutes.route('/').get(function (req, res) {
    if (players) {

        //orderBy score
        players.sort(function (a, b) {
            return (Number(b.score) - Number(a.score));
        });

        return res.status(200).json({ 'msg': 'Success', 'status': 200, 'body': players });
    } else {
        return res.status(400).json({ 'msg': 'Error', 'status': 400 });
    }
});

module.exports = playerRoutes;