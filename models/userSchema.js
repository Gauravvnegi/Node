import { mongoose } from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

const User = mongoose.model('User', userSchema);
export default User;