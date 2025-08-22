import mongoose from "mongoose";
export const connectDB=async ()=>{
        await mongoose.connect('mongodb+srv://prince:PRInce7870@cluster0.aoemjgi.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}