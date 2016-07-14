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
var User4    = require('./app/models/user2');
var User5    = require('./app/models/user2');
var User6    = require('./app/models/user2');
var router = express.Router();
var fs = require('fs');

//var imgPath;
//var imgPath;

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

        var getUser4 = function(req, res, next) {
          User4.find(function(err, users) {
            if (err) return res.json(err);

            return res.json({
              user: users
            });
          });
        };

        var getUser5 = function(req, res, next) {
          User5.find(function(err, users) {
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

        var getUserObject4 = function(req, res, next) {
          User4.findOne({
               name: req.params.items.item.name
          }, function(err, user) {
            if (err) return res.json(err);

            if (!user) return res.json({
                output : 'No such user'
              });

            return res.json(user);

          });
        };

        var getUserObject5 = function(req, res, next) {
          User5.findOne({
            imgpath: req.params.img.imgpath
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

        var saveUser4 = function(req, res, next) {
          var user = new User4({
            
            items: {
                    item :
                    {
                      id: req.body.id,
                      type_category:req.body.type_category,
                      name: req.body.name,

                      batters:
                      {
                        batter:
                        {
                          id1:req.body.id1,
                          type_choice1:req.body.type_choice1 
                        }

                      },

                      topping:
                      {
                        id2:req.body.id2,
                        type_choice2:req.body.type_choice2 
                      } 
                    }

                   }

          });

          user.save(function(err) {
            if (err) return res.json(err);
            return res.json({
              success: 'true',
              output : 'POST is done'
            });

          });

        };


  
  var saveUser5 = function(req, res, next) {
/*         var user = new User5({
            img: 
               { 
                data:req.body.data,
                contentType: req.body.contentType
               }
            
          });*/
          var user = new User5({
            img:{
                 imgpath : req.body.imgpath,
                 //data : fs.readFileSync(imgpath),
                 contentType: req.body.contentType
                }
          });
          user.img.data = fs.readFileSync(user.img.imgpath)
/*          user.img.data = fs.readFileSync(
            {
              imgPath = req.body.imgPath
             });*/

          user.save(function(err) {
            if (err) return res.json(err);
            return res.json({
              success: 'true',
              output : 'POST is done'
            });

          });

        };

        var saveUser6 = function(req, res, next) {
          var user = new User6({
            web_d : req.body.web_d
         });

          user.save(function(err) {
            if (err) return res.json(err);
            return res.json({
              success: 'true',
              output : 'POST is done'
            });

          });

        };
 var saveUser6 = function(req, res, next) {
          var user = new User6({
            web_vedio : req.body.web_vedio,
            web_img : req.body.web_img
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

          var editUser4 = function(req, res, next) {
          return User1.update({
          name : req.params.items.item.name
          }, req.body, function(err) {
            if (err) return res.json(err);

            return res.json({
              success: 'true',
              output : 'PUT is done'
            });
          });
        };

        var editUser5 = function(req, res, next) {
          return User5.update({
            imgpath : req.params.img.imgpath
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

        var deleteUser4 = function(req, res, next) {
          return User1.remove({
            name: req.params.items.item.name
          }, function(err) {

            if (err) return res.json(err);

            return res.json({
              success: 'true',
              output : 'object deleted'
            });
          });
        };

        var deleteUser5 = function(req, res, next) {
          return User5.remove({
            imgpath: req.params.img.imgpath
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

        router.get('/detail4', getUser4);
        router.get('/detail4/find/:name', getUserObject4);
        router.post('/save1', saveUser4);
        router.put('/detail4/update4/:name', editUser4);
        router.delete('/detail4/delete4/:name', deleteUser4);

        router.get('/find/:imgpath', getUserObject5);
        router.post('/save2', saveUser5);
        router.put('/update/:imgpath', editUser5);
        router.delete('/delete/:imgpath', deleteUser5);

        router.post('/save4', saveUser6);





// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


