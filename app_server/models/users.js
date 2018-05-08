const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{ 
        type: String,
        required: true
    },
    facebookid:{
        type: Number,
        required: true
    },
    email:{ 
        type: String,
    },
    estilo:{ 
        type: String,
    },
    equiposFavoritos:{ 
        type: [String],
    },
    integrantesFavoritos:{ 
        type: [String],    
    }
});

module.exports = mongoose.model('users', userSchema);
		