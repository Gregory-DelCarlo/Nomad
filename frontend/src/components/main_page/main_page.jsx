import React from 'react';
import ParksDropDownContainer from '../dropdowns/parks_dropdown_container';

export default class MainPage extends React.Component {
    render() {
        return (
            <main>
                <h1>
                    Welcome to our Site!!!
                </h1>
                <div>Really cool splash page here!</div>
                <ParksDropDownContainer />
            </main>
        )
    }
}