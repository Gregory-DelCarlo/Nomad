import React from 'react';
import Calendar from '../calendar/calendar'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render() {

        return(
           
        <div>
            {/* <div className='greeting-user'>Hi, {currentUser.username} </div> */}
            <Calendar/>
         </div>

        )
    }
}


export default Profile; 
