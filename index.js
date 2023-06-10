import express from 'express';
import mongoose from "mongoose";
import Place from "./place.js";
import router from './router.js'
import fileUpload from 'express-fileupload'

const PASSWORD = 'velich'
const DB_URL = `mongodb+srv://zashitacontact:${PASSWORD}@express-test.1lpgaky.mongodb.net/?retryWrites=true&w=majority`
const PORT = 5000;
const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)``





const startApp = async () =>{
    try {
        await mongoose.connect(DB_URL, )
        app.listen(PORT, () =>{
            console.log(`SERVER STARTED ON PORT ${PORT}`)

        })
    } catch (e){
        console.log(e)
    }
}
startApp();
