import React from 'react';
import { Link } from 'react-router-dom';

export default class Park extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        <div>
            {this.props.park.name}
        </div>
    }
}

export default class ParksDropdown extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getParks();
    }
    // need a component to get parks from state.
    render() {
        const parks = this.props.parks.map(park => {
            return <li><Link to={`/park/${park.id}`}>{park.name}</Link></li>;
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