import { MongoClient } from "mongodb";

async function handler(req,res){

    if(req.method === 'POST'){

        const data = req.body;

        const connectionDB =  await   MongoClient.connect('mongodb://localhost:27017/');
        const db = connectionDB.db('nextjstest');
        const meetupCollections = db.collection('meetups');
        const result = await meetupCollections.insertOne(data);
        console.log(result);
        connectionDB.close();
        res.status(201).json({message: 'Meetup Inserted!'})

    }
   else if(req.method === 'GET'){
       
    const connectionDB =  await   MongoClient.connect('mongodb://localhost:27017/');
    const db = connectionDB.db('nextjstest');
    const meetupCollections = db.collection('meetups');
    const result = meetupCollections.find();
    console.log(result);
    connectionDB.close();
    res.status(201).json({message: 'Meetup Data Fetched!',data: result})

   }
}

export default handler;