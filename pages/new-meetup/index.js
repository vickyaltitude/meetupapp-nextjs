import  NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetUps(){

   async function newMeetUpHandler(meetupdetails){
        
         const sendData = await  fetch('/api/new-meetup',{
          method : 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(meetupdetails)
         });
        
         const parsedData = await sendData.json();
         console.log(parsedData)
    }

  return ( <NewMeetupForm onAddMeetup={newMeetUpHandler} /> )

}

export default NewMeetUps