import mongoose from 'mongoose';

const emailRegex = /.+\@.+\..+/;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        validate: {
            validator: function(v) {
                return emailRegex.test(v);
            },
            message: props => `${props.value} invalid email address`
        }
    }
});

const User = mongoose.model('User', userSchema);

export default User;
