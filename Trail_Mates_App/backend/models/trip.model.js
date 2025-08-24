const mongoose = require('mongoose');
const { Types } = mongoose;
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    ownerId: {
        type: String,
        required: true,
        index: true
    },
    ownerName: {
        type: String,
        required: true,
    },
    title: {
        type:  String,
        required: true,
        trim: true,
        minlength: 3
    },
    location: {
        type:  String,
        required: true,
        trim: true,
        minlength: 3
    },
 

}, {
    timestamp: true,
});

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: String
    },
    createdBy: {
        type: Types.ObjectId, ref: 'User', required: true
    },
    assignedTo: {
        type: Types.ObjectId, ref: 'User', required: true
    }
});


const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;