import mongoose from 'mongoose';

const userScheme = new mongoose.Schema(
    {
        name: {
            type:String,
            required:true,
            trim:true,
        },
        email: {
            type:String,
            unique: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        descripcion: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            url: String,
            public_id: String,
        },
    });

//userScheme.index({ email: 1 }, { unique: true });

export default mongoose.model("User", userScheme);