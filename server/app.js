import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors(
    {
        origin:["http://localhost:5173" ,
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5174"
         ],
    }
));
app.use(express.json());

const PORT = process.env.PORT 

app.get("/api/message" , (req,res) => {
    res.json({message: "message from  server , server is running "})
    // res.json({message: "server is running"})
});

app.listen(PORT , "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
})