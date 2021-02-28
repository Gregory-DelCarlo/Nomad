import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class ParksDropdown extends React.Component {

    constructor(props) {
        super(props);
        // debugger
        this.formatParks = this.formatParks.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }



    componentDidMount() {
        // debugger
        this.props.getParks();
        // this.props.receivePark('6036a5503f24932940440ced');
    }

    handleClick(e) {
        const currentParkId = e.split('/')[2]
        this.props.fetchWeather({ city: this.props.currentPark })
        return this.props.receivePark(currentParkId);
    }

    
    formatParks() {
       const parkslist = {
           "Northern California": [],
           "Central California" : [], 
           "Southern California": []
       }
       
        

        Object.values(this.props.parks).forEach(park => {
            switch (park.location){
                case ("Northern California"):
                    parkslist['Northern California'].push( 
                    <Dropdown.Item className='dropdown-items' key={park._id} href={`#/park/${park._id}`}>
                            {park.name}
                    </Dropdown.Item>)
                     return ""
                case ( "Central California"):
                    parkslist["Central California"].push(
                    <Dropdown.Item className='dropdown-items' key={park._id} href={`#/park/${park._id}`}>
                            {park.name}
                    </Dropdown.Item>)
                    return ""
                case ("Southern California"):
                    parkslist["Southern California"].push(
                    <Dropdown.Item className='dropdown-items' key={park._id} href={`#/park/${park._id}`}>
                            {park.name}
                        
                    </Dropdown.Item>)
                    return ""
                default: 
                        return ""
            }
        })

        return parkslist;
    }

    render() {
       
        const allParks = this.formatParks();

        return (
            <div className='map-menu'>
                    <DropdownButton menuAlign='left' title="Northern California" className='list-button' onSelect={this.handleClick}>
                        {allParks['Northern California']} 
                    </DropdownButton>
                    <DropdownButton title="Central California" className="list-button" onSelect={this.handleClick}>
                        {allParks['Central California']}
                    </DropdownButton>
                    <DropdownButton title='Southern California' className='list-button' onSelect={this.handleClick}>
                        {allParks['Southern California']}
                    </DropdownButton>
            </div>
        )
    }
}