import React from 'react';
import Calendar from '../calendar/calendar_container'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return(
           
        <div className="full-calendar-component">
            <Calendar/>
         </div>

        )
    }
}


export default Profile; 
