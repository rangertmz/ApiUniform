import dotenv from 'dotenv';
import cors from 'cors';
import express from "express";
import routes from './routes';
import './type'
import { verifyToken } from './Middleware/token';


dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());



app.use((req,res,next)=>{
    if(req.path === "/Login" || req.path === "/Register"){
        return next();
    }
    verifyToken(req,res,next)
})
app.use(routes);


app.listen(process.env.PORT || 4000, () => {
    console.log('Listening on port ' + process.env.PORT)
})
