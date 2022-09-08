const express = require('express');
const cors = require('cors');
const { connectToServer } = require('./dbConnect');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());




// .........................
connectToServer((err)=>{

        if(!err){
        app.listen(port, () => {
        console.log(`listening ${port}`);
        })}
        else{
            console.log(err);
        }
})
// .........................






app.get('/', (req,res) => {
    res.send("Hello world!! my name is mozahid i am connetted")
})


