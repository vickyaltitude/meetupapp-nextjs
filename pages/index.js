import MeetupList from '../components/meetups/MeetupList';


function HomePage(props){
   return (<MeetupList meetups={props.meetups}  >

   </MeetupList>)
}

/* export async function getServerSideProps(context){
     const req = context.req;
     const res = context.res;

     return {
        props: {
            meetups: MEETUP_LIST
        }
     }
} */

export async function getStaticProps(){
    
     //fetch data from an API

     const getData = await fetch('http://localhost:3000/api/getmeetup');
    const parsedData = await getData.json();
    console.log(parsedData)

     return {
        props: {
            meetups: parsedData.data
        }
     }
}

export default HomePage