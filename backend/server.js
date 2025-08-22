import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// app config
const app=express()
const port=8000

// middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

// API endpoints
app.use("/api/food",foodRouter)

app.get("/",(request,response)=>{
        response.send("API working")
})

app.listen(port,()=>{
        console.log(`server started on http://localhost:${port}`)
})