import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class ParksDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.formatParks = this.formatParks.bind(this)
    }


    componentDidMount() {
        this.props.getParks();
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
                    <Dropdown.Item key={park._id} href={`#/park/${park._id}`} >
                            {park.name}
                    </Dropdown.Item>)
                     return ""
                case ( "Central California"):
                    parkslist["Central California"].push(
                    <Dropdown.Item key={park._id} href={`#/park/${park._id}`}>
                            {park.name}
                        
                    </Dropdown.Item>)
                    return ""
                case ("Southern California"):
                    parkslist["Southern California"].push(
                    <Dropdown.Item key={park._id} href={`#/park/${park._id}`}>
                            {park.name}
                        
                    </Dropdown.Item>)
                    return ""

                default: 
                        return ""

            }
                
        });
        return parkslist
    }
    

    // need a component to get parks from state.
    render() {
        // const parks = Object.values(this.props.parks).map(park => {
        //     return( 
        //         // <li key={park._id} className='park'>
        //             <Dropdown.Item>
        //             <Link to={`/park/${park._id}`}>
        //                 {park.name}
        //             </Link>
        //             </Dropdown.Item>
        //         // </li>
        //     )
        // });
        const allParks = this.formatParks();

        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Regional Areas
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {allParks['Northern California']}
                        </Dropdown.Menu>
                </Dropdown>
            </>
        )
    }
}