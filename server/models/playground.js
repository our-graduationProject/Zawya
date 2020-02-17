const mongoose = require("mongoose");

const playgroundSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: String, required: true },
    price: { type: Number, required: true }, 
    phone: { type: String, required: true },
    pmHours: {type:[String],required: true},
    amHours: {type:[String],required: true},
    location: { type: String, required: true },
    imagePath:{ type: String, required: true }  
});

module.exports = mongoose.model("Playground", playgroundSchema);
