const ToDo = require("../models/todo.module");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const todo = await new ToDo(req.body).save();
    res.send(todo);
  } catch (error) {
    res.send(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const toDoes = await ToDo.find();
    res.send(toDoes);
  } catch (error) {
    res.send(error);
  }
});

router.put('/:id',async(req,res)=>{
    try {
        const todo =await ToDo.findOneAndUpdate({_id:req.params.id},req.body)
        res.send(todo)
    } catch (error) {
 res.send(error)       
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const todo =await ToDo.findByIdAndDelete(req.params.id)
        res.send(todo)
    } catch (error) {
 res.send(error)       
    }
})


module.exports=router;
