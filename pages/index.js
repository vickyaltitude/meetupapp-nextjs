import MeetupList from '../components/meetups/MeetupList';

const MEETUP_LIST = [{
    id: 'm1',
    title: 'A first meet up',
    image : 'https://imageio.forbes.com/specials-images/dam/imageserve/503064668/960x0.jpg?height=474&width=711&fit=bounds',
    address: 'No 22 new cross street, puducherry-605004',
    description: 'this is just a first meet up'
},
{
    id: 'm2',
    title: 'A second meet up',
    image : 'https://student-cms.prd.timeshighereducation.com/sites/default/files/styles/default/public/cbh_rhul_arch1_0026v1_1_0.jpg?itok=qOtCnkFQ',
    address: 'No 22 new cross street, puducherry-605004',
    description: 'this is just a second meet up'
}]

function HomePage(){
   return (<MeetupList meetups={MEETUP_LIST}  >

   </MeetupList>)
}

export default HomePage