import React from 'react';
import { Link } from 'react-router-dom';

export default class ParksDropdown extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getParks();
    }

    // renderTrail() {
    //     const parks = document.getElementsByClassName('park');
    //     parks.forEach(park => {
    //         park.addEventListener('click', e => {

    //         })
    //     })
    // }
    // need a component to get parks from state.
    render() {
        const parks = Object.values(this.props.parks).map(park => {
            return <li className='park'>{park.name}</li>;
        })
        return (
            <>
                <ul>
                    {parks}
                </ul>
            </>
        )
    }
}