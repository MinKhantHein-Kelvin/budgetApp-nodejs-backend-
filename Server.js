const express = require('express');
const app = express();
const mysql2 = require('mysql2');
const db = require('./models');
const cors = require("cors");
var bodyParser = require('body-parser');
const userRouter = require ("./routes/userRoute");
const categoryRouter = require ("./routes/categoryRoute");
const expenseRouter = require ("./routes/expenseRoute");
const incomeRouter = require ("./routes/incomeRoute");



app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true })); //, parameterLimit:500000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use("/", userRouter);
app.use("/category", categoryRouter);
app.use("/expense", expenseRouter);
app.use("/income", incomeRouter);

db.sequelize.sync().then((req)=>{
    app.listen(3001, ()=>{
        console.log("Server is running at port 3001");
    })
})