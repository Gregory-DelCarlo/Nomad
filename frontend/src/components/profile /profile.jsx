import React from 'react';
import DemoApp from '../calendar/calendar'

class Profile extends React.Component {
    constructor(props) {
        super(props)

    componentDidMount() {
        this.props.getUser(this.props.match.params.userId)
    }
 

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        
        return(



        ) 
    }
}

