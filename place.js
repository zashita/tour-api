import mongoose from "mongoose";

const Place = new mongoose.Schema({
    continent:{type: String, required: true},
    country:{type: String, required: true},
    city:{type: String, required: true},
    name:{type: String, required: true},
    photos: {type: String, required: true}
})

export default mongoose.model('Place', Place)
