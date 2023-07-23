const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

require('dotenv').config()



const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)



mongoose.connect(`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0.h1azxds.mongodb.net/courseapp`)
.then((data)=> console.log('db connected'));

app.listen(3000, () => console.log('Server running on port 3000'));
