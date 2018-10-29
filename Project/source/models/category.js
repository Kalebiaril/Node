import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String}
});

let Category = mongoose.model('Category', CategorySchema);

export default Category;
