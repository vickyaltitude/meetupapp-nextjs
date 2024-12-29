import  NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetUps(){

    function newMeetUpHandler(meetupdetails){
        console.log(meetupdetails)
    }

  return ( <NewMeetupForm onAddMeetup={newMeetUpHandler} /> )

}

export default NewMeetUps