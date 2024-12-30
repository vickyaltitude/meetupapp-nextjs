
function MeetUpDetails(props){

    return(<>
         <img src={props.meetupData.image} width='100%'></img>
         <h1>{props.meetupData.title}</h1>
         <h3>{props.meetupData.address}</h3>
         <p>{props.meetupData.description}</p>
    </>)

}

export function getStaticPaths(){
    return {
        fallback: false,
        paths:[
            {
                params:{
                    meetupid: 'm1'
                }
            },{
                params:{
                    meetupid: 'm2'
                }
            },
            {
                params:{
                    meetupid: 'm3'
                }
            }
        ]
    }
}

export function getStaticProps(context){
    const meetupId = context.params.meetupid;
    console.log(meetupId)
    return {
         props:{
            meetupData: {
                id: meetupId,
                image: 'https://imageio.forbes.com/specials-images/dam/imageserve/503064668/960x0.jpg?height=474&width=711&fit=bounds',
                title: 'A first meet up',
                address: 'No 22 new cross street, puducherry-605004',
                description: 'this is just a first meet up'
            }
         }
    }
}

export default MeetUpDetails;