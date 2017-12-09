var Game = require('./models/game');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/games', function(req, res) {
            // use mongoose to get all games in the database
            Game.find(function(err, games) {
                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json(games); // return all nerds in JSON format
            });
        });
        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

    };

