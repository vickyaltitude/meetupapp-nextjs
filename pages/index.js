import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head';


function HomePage(props){
   return (
   <>
        <Head>
        
        <title>Meetup Page</title>
        <meta name='description' content='This is the page for all the alumni to gather'/>
        </Head>
        <MeetupList meetups={props.meetups}  />
   </>
   )
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