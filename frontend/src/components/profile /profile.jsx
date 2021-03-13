import React from 'react';
import Calendar from '../calendar/calendar'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    

    componentDidMount() {
       
       
    }
 

    componentWillUnmount() {
        this.props.clearErrors();
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
