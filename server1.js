// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var mongoose = require('mongoose');
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var User     = require('./app/models/user');
var router = express.Router();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port



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

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

//router.get('/', function(req, res) {
//    res.json({ message: 'hooray! welcome to our api!' }); 
//    console.log('two'); 
//});

// more routes for our API will happen here
router.route('/users')

    // create a bear (accessed at POST http://localhost:8080/api/users)
    .post(function(req, res) {
        
        //var user = new User();      // create a new instance of the User model
        //user.firstname = req.body.firstname;  // set the users name (comes from the request)
        //user.lastname = req.body.lastname;  // set the users name (comes from the request)
        var user = new User({     // create a new instance of the User model
         firstname : req.body.firstname,  // set the users name (comes from the request)
         lastname : req.body.lastname  // set the users name (comes 
        });
        console.log('three');
        console.log(user.firstname);
        console.log(user.lastname);
    
        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);
            
            console.log('four');
            res.json({ message: 'User created!' });
            
        });
        
    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            console.log('five');
            res.json(users);
        });
    });
// on routes that end in /bears


// on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/users/:user_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
    	 console.log("req.params.user_id" + req.params.user_id);
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);

            console.log('six');
            res.json(user);
        });
    });


var editUser = function(req, res, next) {
          return User.update({
            firstname: req.params.firstname,
            lastname : req.params.lastname
          }, req.body, function(err) {
            if (err) return res.json(err);

            return res.json({
              success: 'true',
              pesan: 'user is edited'
            });
          });
        };
//router.put('/update/:firstname', editUser);//edit user
router.put('/update/:user_id', editUser);//edit user

var deleteUser = function(req, res, next) {
          return User.remove({
            firstname: req.params.firstname
          }, function(err) {

            if (err) return res.json(err);

            return res.json({
              success: 'true',
              pesan: 'Deleted'
            });
          });
        };

router.delete('/delete/:firstname', deleteUser);//delet user

var saveUser = function(req, res, next) {
          var user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname
          });

          user.save(function(err) {
            if (err) return res.json(err);
            return res.json({
              success: 'true',
              pesan: 'new obj created'
            });

          });

        };
router.post('/save', saveUser);//add new user

var getUser = function(req, res, next) {
          User.find(function(err, users) {
            if (err) return res.json(err);

            return res.json({
              user: users
            });
          });
        };
        router.get('/', getUser);

        var getUserObject = function(req, res, next) {
           User.findOne({
            firstname: req.params.firstname,
            lastname : req.params.lastname
          }, function(err, user) {
            if (err) return res.json(err);

            if (!user) return res.json({
                info: '404',
                pesan: 'Data tidak ada'
              });

            return res.json(user);

          });
        };
        router.get('/find/:user_id', getUserObject);



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);