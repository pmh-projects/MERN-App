const express = require('express');
const mongoose = require('mongoose');
const EqModel = require("./models/eq");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://proj:proj@cluster0.cvbup.mongodb.net/projekt?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
}
);

app.post("/dodaj", async (req, res) => {

   const eqName = req.body.eqName;
   const eqNum = req.body.eqNum;

   const Eq = new EqModel({eqName:eqName, eqNum: eqNum});

   try{
       await Eq.save();
       res.send("Dodano");
     
   }catch(err){
       console.log(err);
   }
});

app.get("/odczyt", async (req, res) => {

    EqModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        }
        res.send(result);
    })
 });

app.put('/edytuj', async (req,res) => {
    const newEqNum = req.body.newEqNum;
    const id = req.body.id;

    if (!isNaN(newEqNum) && newEqNum != null && newEqNum != 0 && newEqNum > 0){
    try {
        await EqModel.findById(id, (err, updatedNum) => {
            updatedNum.eqNum = newEqNum;
            updatedNum.save();
            res.send('Edytowano');
        });
    }catch(err){
        
        console.log(err);
    }
}else{
    res.send("Nie edytowano.");
}
});

app.delete('/usun/:id', async (req, res) => {
    const id = req.params.id;
    await EqModel.findByIdAndRemove(id).exec()
    res.send("Usunięto");
})

app.listen(3000, () => {
    console.log(`Serwer dziala na ${port}`);
});