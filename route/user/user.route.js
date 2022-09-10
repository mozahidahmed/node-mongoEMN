const express = require('express');
const { ObjectId } = require('mongodb');
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
            const result= await db.collection("users").find()
            .toArray();
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


router
.route('/:id')

.get( async (req, res,next) => {
    try{
      const db=getDb();
      const {id}=req.params;
      const result=await db.collection('users').findOne({_id:ObjectId(id)})
      res.status(200).json({success:true , data: result})
    }catch (error){
    next(error);
        }})

.patch( async (req, res,next) => {
    try{
      const db=getDb();
      const {id}=req.params;
      const result=await db.collection('users').updateOne({_id:ObjectId(id)},{$set:req.body})
      res.status(200).json({success:true , data: result})
    }catch (error){
    next(error);
        }})
.delete( async (req, res,next) => {
    try{
      const db=getDb();
      const {id}=req.params;
      const result=await db.collection('users').deleteOne({_id:ObjectId(id)})
      res.status(200).json({success:true , data: result})
    }catch (error){
    next(error);
        }})


module.exports = router;