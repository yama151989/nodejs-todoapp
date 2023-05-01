const express = require("express");
const app = express();
const PORT = 5000;
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());
app.use(express.static("./public"));

//ルーティング設計
app.use("/api/v1/tasks", taskRoute);

//データベースと接続
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, console.log("サーバが起動しました"));
    }catch (err){
        console.log(err);
    }
};

start();


