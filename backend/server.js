const express=require('express');
const mongoose=require('mongoose');

require('dotenv').config();

const app=express();
const PORT=process.env.port || 8000;

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Connected to database")})
.catch((err)=>{console.log(err)})

const routes=require('./routes/TodoRoute')
app.use(routes);
