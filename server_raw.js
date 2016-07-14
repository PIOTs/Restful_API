// server.js

// BASE SETUP
// =============================================================================

// call the packages we need

var express    = require('express');        // call express
var mongoose = require('mongoose');
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var User     = require('./app/models/user2');
var User1     = require('./app/models/user2');
//var User4     = require('./app/models/user2');
var router = express.Router();

// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8081;        // set our port



// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    console.log('one');
    next(); // make sure we go to the next routes and don't stop here
});

var getUser = function(req, res, next) {
          User.find(function(err, users) {
            if (err) return res.json(err);

            return res.json({
              user: users
            });
          });
        };

        var getUser1 = function(req, res, next) {
          User1.find(function(err, users) {
            if (err) return res.json(err);

            return res.json({
              user: users
            });
          });
        };


        var getUserObject = function(req, res, next) {
          User.findOne({
            email: req.params.email
          }, function(err, user) {
            if (err) return res.json(err);

            if (!user) return res.json({
                output : 'No such user'
              });

            return res.json(user);

          });
        };

        var getUserObject1 = function(req, res, next) {
          User1.findOne({
            firstname: req.params.firstname
          }, function(err, user) {
            if (err) return res.json(err);

            if (!user) return res.json({
                output : 'No such user'
              });

            return res.json(user);

          });
        };


        var saveUser = function(req, res, next) {
          var user = new User({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name 
          });

          user.save(function(err) {
            if (err) return res.json(err);
            return res.json({
              success: 'true',
              output : 'POST is done'
            });

          });

        };

        var saveUser1 = function(req, res, next) {
          var user = new User1({
            firstname: req.body.firstname,
            lastname: req.body.lastname
          });

          user.save(function(err) {
            if (err) return res.json(err);
            return res.json({
              success: 'true',
              output : 'POST is done'
            });

          });

        };




        var editUser = function(req, res, next) 
        {
          return User.update(
          {
            email: req.params.email
          }, req.body, function(err)
           {
            if (err) return res.json(err);

            return res.json({
              success: 'true',
              output : 'PUT is done'
            });

           });
        };
        
        var editUser1 = function(req, res, next) {
          return User1.update({
            firstname: req.params.firstname
          }, req.body, function(err) {
            if (err) return res.json(err);

            return res.json({
              success: 'true',
              output : 'PUT is done'
            });
          });
        };

        var deleteUser = function(req, res, next)
         {
          return User.remove(
          {
            email: req.params.email
          }, function(err)
           {

            if (err) return res.json(err);

            return res.json({
              success: 'true',
              output : 'object deleted'
            });
            
          });
        };


        var deleteUser1 = function(req, res, next) {
          return User1.remove({
            firstname: req.params.firstname
          }, function(err) {

            if (err) return res.json(err);

            return res.json({
              success: 'true',
              output : 'object deleted'
            });
          });
        };

        router.get('/', getUser);
        router.get('/find/:email', getUserObject);
        router.post('/save', saveUser);
        router.put('/update/:email', editUser);
        router.delete('/delete/:email', deleteUser);
        router.get('/detail', getUser1);
        router.get('/detail/find/:firstname', getUserObject1);
        router.post('/detail/save', saveUser1);
        router.put('/detail/update/:firstname', editUser1);
        router.delete('/detail/delete/:firstname', deleteUser1);
        //router.post('/detail_choice/save', saveUser4);




// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


