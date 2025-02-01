import mongoose, { Schema } from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!);
        // console.log(`Database connected: ${conn.connection.host}`);
        console.log(`Database connected`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};



// export default connectDB;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
})

const contentType = ["youtube", 'document', 'tweet', "link"];

const contentSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    types: {
        type: String,
        enum: contentType,
        required: true
    },

    title: {
        type: String,
        required: true
    },
    // tags: { type: Schema.Types.ObjectId, ref: 'Tag', default: [] },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

const sharedlinkSchema = new Schema({
    hast: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true }
})

const tagSchema = new Schema({
    title: {
        type: String, required: true, unique: true
    }
})

export const UserModel = mongoose.model('User', userSchema);
export const ContentModel = mongoose.model('Content', contentSchema);
export const TagModel = mongoose.model('Tag', tagSchema);
export const LinkModel = mongoose.model('Link', sharedlinkSchema);


