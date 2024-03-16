
import News from "../model/new-schema.js";

export const getNews = async (req, res) =>{

try{

let data = await News.find({});
res.status(200).json(data);
}catch(e)
{
   res.status(500).json({message: e.message});
}

}