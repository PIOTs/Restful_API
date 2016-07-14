var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    mongoose.connect('mongodb://localhost:27017/new_db');


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
        nama: {
          type: 'String',
          require: true
        },
        noHp: {
          type: 'String',
          require: true
        },
        tanggalLahir: {
          type: 'String',
          require: true
        },
        role: {
          type: 'String',
          require: true
        }
      },
      {
        collection: 'tb_user'
      }
    );

    module.exports = mongoose.model('User', User);