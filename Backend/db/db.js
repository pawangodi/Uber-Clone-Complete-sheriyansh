const mongoose  = require("mongoose");

function connectToDb() {
    mongoose.connect(process.env.Db_CONNECT).then(()=>{
        console.log("CONNECT TO DB");

    }).catch(error => console.log(error));
}
module.exports = connectToDb;