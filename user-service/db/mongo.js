const mongoose = require('mongoose');

let mongoServer = process.env.MONGODB_URI || "mongodb://localhost:27017/testdb"

class DBConnection {
    constructor(){
        this._connect();
    }

    _connect(){
        mongoose.connect(mongoServer, {
            useNewUrlParser: true,
            useUnifiedTopology : true,
            useCreateIndex: true
        })
        .then(() => {
            console.log("Database Connection Successfull");
        })
        .catch(err => {
            console.log("Database Connection Error");
            console.log(err);
        });
    }
}

module.exports = new DBConnection();