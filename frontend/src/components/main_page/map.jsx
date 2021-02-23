import React from 'react';
import mapboxgl from 'mapbox-gl'; 

export default class Map extends React.Component {

    constructor(props) {
        super(props);

        this.loadMap = this.loadMap.bind(this);
    }

    loadMap() {
 
        mapboxgl.accessToken = 'pk.eyJ1IjoiZWRlbGNhcmxvIiwiYSI6ImNrbGN3NTlzdDAxMzcybm82NGE3MmU2OHMifQ.Vv0LFOf9tjTezj4BlKMmAQ';
        new mapboxgl.Map({
        container: 'trail-map',
        style: 'mapbox://styles/mapbox/streets-v11'
        });
    }

    componentDidMount() {
        this.loadMap();
    }

    render() {
        return(
            <div id='trail-map' style={{height: 700}}></div>
        )
    }
}