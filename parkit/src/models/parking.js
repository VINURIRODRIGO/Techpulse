const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
    name: String,
    title: String,
    availableSlot: Number,
    img: String
  });

module.exports = mongoose.model('Parking', parkingSchema);
