import {data }from './constants/data.js'
import News from './model/new-schema.js';


const DefaultData = async () => {
  try{
 await News.insertMany(data); 
 console.log("data is importred successfully ");
  }catch(error)
  {
    console.log("error", error.message);
  }
  
}

export default DefaultData;
