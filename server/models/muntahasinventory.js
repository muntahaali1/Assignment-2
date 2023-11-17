let mongoose = require('mongoose');
// create a muntahas inventory
let muntahasInventory = mongoose.Schema({
    "Name": String,
    "Colour": String,
    "Material": String,
    "Description": String,
    "Price": Number
    },
    {
        collection: "muntahasinventory"
    }
)
module.exports = mongoose.model('muntahasinventory', muntahasInventory);

