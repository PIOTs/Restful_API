var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    mongoose.connect('mongodb://localhost:27017/rt_db_one');

    var node1 = mongoose.model('node1', { name: String });

    var info = new node1({ name: 'Realtime database' });
        info.save(function (err) {
         if (err) {
        console.log(err);
                 } 
        else {
        console.log('Fill_info');
             }
       });



    var User = new Schema(
      {
        email: {
          type: 'String',
          require: true
               },
        password: {
          type: 'String',
          require: true
                  },
        name: {
          type: 'String',
          require: true
              }
      },

      {
        collection: 'tb_user'
      }

    ); 


    var User_info   = new Schema(
    {
    firstname:{
              type : 'String',
              require : true
            },
    lastname:{
             type : 'String',
             require : true
           }
    },
    {
      collection : 'usr_details'
    }
    );

    //categories userid country_code

   module.exports = mongoose.model('User', User);

   module.exports = mongoose.model('User1', User_info);
  // module.exports = mongoose.model('User4', data_choose);