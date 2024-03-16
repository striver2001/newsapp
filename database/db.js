import mongoose from "mongoose";

const Connection = async(username, password) =>{
    const URL=`mongodb+srv://${username}:${password}@inshortsclone.klkpplx.mongodb.net/?retryWrites=true&w=majority&appName=inShortsClone`;
   try{

await mongoose.connect(URL);
console.log("database is connected successfully")
   }catch(error)
   {
   console.log("Error while connection with database", error); 
   } 
}



export default Connection;