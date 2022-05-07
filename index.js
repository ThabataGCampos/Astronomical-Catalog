import express from "express";
import { routers } from './src/routers/routers.js';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
let __dirname = path.resolve(path.dirname(''));
const PORT = 3001||process.env.PORT;

app.use(express.urlencoded({extended: true})); // para a info não ir para a url
app.use(express.json());
app.set("view engine", "ejs");
app.use(routers);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname,'views')));

app.listen(PORT, () => {
    console.clear();
    console.log(`Server in http://localhost:${PORT}`)
});


   
   
