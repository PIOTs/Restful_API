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
                          "id":  {
                                type: 'String',
                                require: true
                                 }, 
                           "type_choice":{
                                    type: 'String',
                                    require: true
                                         }
                         }
                    },

            "topping":
                     { 
                         "id":{
                                type: 'String',
                                require: true
                                 }, 

                                 "type_choice": {
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


//////////////////////////////////////////////////////////////
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
                          id:req.body.id,
                          type_choice:req.body.type_choice 
                        }

                      },

                      topping:
                      {
                        id:req.body.id,
                        type_choice:req.body.type_choice 
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










        /////////////////////////////////////////


        {
  "items":
    {
      "item":
        [
          {
            "id": "0001",
            "type_category": "donut",
            "name": "Cake",
            "batters":
              {
                "batter":
                  [
                    { "id": "1001", "type_choice": "Regular" }

                  ]
              },
            "topping":
              [
                { "id": "5001", "type": "blue" }
              ]
          }

          

        ]
    }
}