import express from "express";
const app = express();
import { z } from "zod";
import { connectDB, ContentModel, LinkModel, UserModel } from "./config/db"
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
import cors from "cors";

//adding middleware to parsing the json data
app.use(express.json());
dotenv.config();

// interface UserInterfaceSchema {
//     username: string,
//     password: string
// }

app.use(cors());

connectDB();

const zodSchemaUser = z.object({
    username: z.string().min(3, { message: "username must contains atleat 3 characters" }),
    password: z.string()
        .min(3,)
        .max(20)
        .refine((password) => /[A-Z]/.test(password), {
            message: "password must contains atleat one uppercase"
        })
        .refine((password) => /[a-z]/.test(password), {
            message: "password must contains atleat one lower case"
        })
        .refine((password) => /[0-9]/.test(password), {
            message: "password must contains atleat a number"
        })

})

//**********signup***********


app.post('/api/v1/signup', async function (req, res) {
    // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const { username, password } = req.body;
    const validateSchema = zodSchemaUser.safeParse(req.body);
    if (!validateSchema.success) {
        console.log(validateSchema.error)
        res.status(411).json({
            message: validateSchema.error.errors.map((error) => `${error.code}: ${error.message}`)
        })
    } else {
        // checking if the user is already exist or not
        const userExist = await UserModel.findOne({ username: username });

        if (userExist) {
            res.status(411).json({
                message: "user already exists"
            })
            return
        }
        try {
            await UserModel.create({
                username,
                password
            })
        } catch (error) {
            console.log(error)
        }


        res.status(200).json({
            message: "user has been signed up"
        })
    }
})

// ***********signin***********

app.post('/api/v1/signin', async function (req, res) {
    const { username, password } = req.body;
    const validateSchema = zodSchemaUser.safeParse(req.body);
    if (!validateSchema.success) {
        console.log(validateSchema.error)
        res.status(411).json({
            message: validateSchema.error.errors.map((error) => `${error.code}: ${error.message}`)
        })
    } else {
        const userExist = await UserModel.findOne({ username: username });
        if (!userExist) {
            res.status(400).json({
                message: "invalid email"
            })
            return
        }
        if (userExist.password === password) {
            const token = jwt.sign({
                userId: userExist._id
            }, process.env.JWTSECRET || "anything");
            res.status(200).json({
                token: token,
                message: "user has been signed in"
            })
        } else {
            res.status(403).json({
                message: "invalid apssword"
            })
        }


    }
})

// ********* content route********
app.get('/api/v1/content', middleware, async function (req, res) {
    //@ts-ignore
    const userId = req.userId;
    const result = await ContentModel.find({ userId }).populate("userId", "username");
    res.status(200).json({
        message: "its content "
    })
})

app.post('/api/v1/content', middleware, async function (req, res) {
    //@ts-ignore
    const userId = req.userId;
    const { title, types, link } = req.body;
    await ContentModel.create({
        link,
        types,
        title,
        userId: userId,
    })
    res.status(200).json({
        message: "its content "
    })
})
app.delete('/api/v1/content', middleware, async function (req, res) {
    const { title } = req.body
    await ContentModel.deleteOne({ title: title })
    res.status(200).json({
        message: "its content "
    })
})

// **********share******
app.post('/api/v1/brain/share', middleware, async function (req, res) {
    const share = req.body.share;
    //@ts-ignore
    const userId = req.userId;
    if (share) {
        LinkModel.create({

            userId: userId,
            hash: String(10)
        })
    } else {
        LinkModel.deleteOne({
            userId: userId,
        })
    }
})

app.post('/api/v1/brain/share:sharelink', middleware, function (req, res) {
    const share = req.body.share;

})

//home route
app.get('/', function (req, res) {
    res.send("hello")
})




app.listen(3000, () => {
    console.log('server is running on the port 3000')
})