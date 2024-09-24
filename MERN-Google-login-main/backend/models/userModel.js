import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    image: {
        type: String
    }
},
{ timestamps: true });

const User = mongoose.model('social-login', userSchema);

export default  User;