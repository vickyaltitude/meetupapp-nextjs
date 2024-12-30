import { MongoClient,ObjectId } from "mongodb";

function MeetUpDetails(props){

    return(<>
         <img src={props.meetupData.image} width='100%'></img>
         <h1>{props.meetupData.title}</h1>
         <h3>{props.meetupData.address}</h3>
         <p>{props.meetupData.description}</p>
    </>)

}

export async function getStaticPaths(){

        
    const connectionDB =  await   MongoClient.connect('mongodb://localhost:27017/');
    const db = connectionDB.db('nextjstest');
    const meetupCollections = db.collection('meetups');
    const result = await meetupCollections.find({},{_id:1}).toArray();
    connectionDB.close()
 
    return {
        fallback: false,
        paths: result.map(item => ({params:{meetupid : item._id.toString()}}))
    }
}

export async function getStaticProps(context){

    
    const meetupId = context.params.meetupid;
    console.log(meetupId)

    const connectionDB =  await   MongoClient.connect('mongodb://localhost:27017/');
    const db = connectionDB.db('nextjstest');
    const meetupCollections = db.collection('meetups');
    const meetupData = await meetupCollections.findOne({_id: new ObjectId(meetupId)});
    connectionDB.close()

    return {
         props:{
            meetupData:{
    ...meetupData,
    _id: meetupData._id.toString(), 
  }
         }
    }
}

export default MeetUpDetails;