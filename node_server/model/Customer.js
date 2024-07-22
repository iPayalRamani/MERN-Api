
const mongoose = require("mongoose");

const schema = mongoose.Schema({

    ComplaintID: String,
    CustomerName: String,
    Description: String,
    Status: String,
    Date: String
    

});

module.exports = mongoose.model("Customer",schema);