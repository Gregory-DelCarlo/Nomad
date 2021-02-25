import React from 'react';
import { Link } from 'react-router-dom';

export default class ParksDropdown extends React.Component {


    componentDidMount() {
        this.props.getParks();
    }


    // need a component to get parks from state.
    render() {
        const parks = Object.values(this.props.parks).map(park => {
            return( 
                <li key={park._id} className='park'>
                    <Link to={`/park/${park._id}`}>
                        {park.name}
                    </Link>
                </li>
            )
        });

        return (
            <>
                <ul>
                    {parks}
                </ul>
            </>
        )
    }
}