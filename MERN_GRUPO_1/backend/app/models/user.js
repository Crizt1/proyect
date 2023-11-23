import mongoose from 'mongoose';

const userScheme = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true,
            required: true,
            trim: true,
        },
        name: {
            type: String,
            required:true,
            trim:true,
        },
        image: {
            type: Buffer,
            url: String,
            public_id: String,
        },
        price: {
            type: Number,
            required:true,
            trim:true,
        },
        stock: {
            type: Number,
            required: true,
            trim: true,
        }

    });

userScheme.index({ id: 1 }, { unique: true });


export default mongoose.model("User", userScheme);