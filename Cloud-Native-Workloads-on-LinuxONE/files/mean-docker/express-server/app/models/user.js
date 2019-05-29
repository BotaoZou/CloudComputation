var mongoose = require('mongoose');

// Define the schema
module.exports = mongoose.model('User', {
    user_id: {
        type: number,
        default: ''
    },

    code: {
    	type: String,
    	default: ''
    },

    contact_method: {
        type: String,
        default: ''
    },

    rank: {
    	type: Number,
    	default: ''
    }

});
