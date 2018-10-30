import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    login: { type: String, required: true },
    password: { type: String, required: true},
    isAdmin:{type: boolean}
});

let User = mongoose.model('User', UserSchema);

export default User;
