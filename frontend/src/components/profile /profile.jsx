import React from 'react';
import Calendar from '../calendar/calendar'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }
 

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {

        return(
        <div>
            <div>Hi, {currentUser.username} </div>
            <Calendar/>
         </div>

        ) 
    }
}


export default Profile; 
