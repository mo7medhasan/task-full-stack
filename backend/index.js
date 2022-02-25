const express =require('express');
const app =express();
const cors =require('cors');

require("./db");
const TodoRoute=require('./routes/todo.routes')



app.use(express.json())
app.use(cors())

app.use('/api/todo',TodoRoute);



app.listen(process.env.PORT || 5000, () => {
    console.log(`server listen on ${process.env.PORT}  👌👏`)
})