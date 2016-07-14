var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    mongoose.connect('mongodb://localhost:27017/new_db_done3');
    
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
        collection: 'emai_detail'
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
      collection : 'usr_information'
    }
    );

    var data_choose = new Schema(
     {
  "items":{

        "item":{

            "id":{
                  type: 'String',
                  require: true
                 } ,
            "type_category":{
                  type: 'String',
                  require: true
                 },
            "name":{
                  type: 'String',
                  require: true
                 },
            //"ppu": 0.55,

            "batters":{

                "batter":{
                          "id1":  {
                                type: 'String',
                                require: true
                                 }, 
                           "type_choice1":{
                                    type: 'String',
                                    require: true
                                         }
                         }
                    },

            "topping":
                     { 
                         "id2":{
                                type: 'String',
                                require: true
                                 }, 

                                 "type_choice2": {
                                       type: 'String',
                                       require: true
                                      } 
                    }


              }

          
       
    }
},

      {
        collection: 'choice'
      }

    );

    var Item_img = new Schema(
  { img: 
      { imgpath : String, 
        data: Buffer, 
        contentType: String }
      },

     {
        collection: 'img_bird'
      }

);

 var web_db = new Schema(
      {  
       
        web_vedio: {
            type: 'String',
            require: true
             },

       web_img: {
            type: 'String',
            require: true
             }
      },

     {
        collection: 'webp'
      }

);
             
  
                  
  module.exports = mongoose.model('User1', User_info);

   module.exports = mongoose.model('User', User);
   module.exports = mongoose.model('User4', data_choose);
   module.exports = mongoose.model('User5', Item_img);   
   module.exports = mongoose.model('User6', web_db);  






