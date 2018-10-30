import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: {type: String, required: false},
    image_url: {type:String, required: false},
    category_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category', required:false }
});

// static method
// UserSchema.statics.create_user()

// hooks
// UserSchema.pre('save', () => {

// })

// UserSchema.post('save', () => {
    
// })

let Product = mongoose.model('Product', ProductSchema);

export default Product;
