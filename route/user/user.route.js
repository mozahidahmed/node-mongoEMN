const express = require('express');
const { getDb } = require('../../dbConnect');

const router = express.Router();




router
    .route('/')



//GET ............................
    // .get( async (req, res,next) => {
    //     try{
    //         const db=getDb();
    //         const result="sjdghkdsfhghsajdhlgsajk"
    //         res.send(result)
    //     }catch (error){
    //     next(error);
    //         }})

    .get( async (req, res,next) => {
        try{
            const db=getDb();
            const result= await db.collection("users").find().toArray();
           res.status(200).json({success:true , data: result})
        }catch (error){
        next(error);
            }})



// ......................


//...................... 
.post(async (req,res) => {
    try{
        const db=getDb();
        const user=req.body;
        const result= await db.collection("users").insertOne(user);
        console.log(result)
        res.send("successfully")
    }
    catch (error){
    next(error);
        }})
//...................... 




module.exports = router;