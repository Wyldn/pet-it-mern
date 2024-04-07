const { Schema } = require('mongoose');
const User = require('./User');

const clothingSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        clothingName: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            required: true,
        },
        pictures: {
            type: Array,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        clothingType: {
            type: Date,
            required: true,
        },
        cost: {
            type: String,
            required: true,
        },
        clothingOwner: [User.schema]
    }
)

const Clothing = mongoose.model('Clothing', dogSchema);

module.exports = Clothing;