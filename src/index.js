// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose from 'mongoose';
import {DB_NAME} from './constants.js';
import connectDB from './db/index.js';

dotenv.config({
  path:'./.env'
})



connectDB()



// ( async () =>{
//     try{
//       await mongoose.connect(`${process.env.MONGOFB_URI}/${DB_NAME}`)
//     }catch(error){
//         console.error("ERROR:",error)
//         throw err
//     }
// })() // this is syntax for immediatley execute the code this is called IFE
