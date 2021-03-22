import React from 'react';
import Weather from '../weather/weather_container'

export default class Park extends React.Component {
    constructor(props) {
        super(props);
        this.areaParks = [];
        this.getMap = this.getMap.bind(this);
        this.getParks = this.getParks.bind(this);
        this.parkRid = '';
        this.areas = [
            <li className='area-name'><button onClick={this.getParks}>Northern California</button></li>,
            <li className='area-name'><button onClick={this.getParks}>Central California</button></li>,
            <li className='area-name'><button onClick={this.getParks}>Southern California</button></li>
        ];
    }

    componentDidMount() {
        this.props.getParks();
    }

    getMap() {
        if (!this.props.park || this.props.getParks()) return null;
        return(
                <div className="map-container">
                    <div className="map-info">
                        <iframe title='region info' width="900" height="133" frameBorder="0" src={`https://www.trailforks.com/widgets/region_info/?rid=${this.props.parkRid}&counts=1&stats=1&title=1&w=800px&h=133&activitytype=6`}></iframe>
                    </div>
                    <div className="map-widget">
                        <iframe title='region map' width="900" height="500" frameBorder="0" allowFullScreen src={`https://www.trailforks.com/widgets/region_map/?rid=${this.props.parkRid}&w=900px&h=500px&activitytype=6&maptype=trailforks&trailstyle=difficulty&controls=0&list=1&layers=labels,poi,polygon,directory,region&z=&lat=&lon=&hideunsanctioned=0`}></iframe>
                </div>
                <Weather/>
            </div>
        )
    }

    getParks(e) {
        this.areaParks = [];

        Object.keys(this.props.parks).forEach( parkKey => {
            if (this.props.parks[parkKey].location === e.target.innerText) {
                this.areaParks.push(<li className='park-name'>
                                        <button onClick={() => this.parkRid = this.props.parks[parkKey].rid }>
                                            {this.props.parks[parkKey].name}
                                        </button>
                                    </li>);
            }
        });
    }

    render() {
        return(
            <div className='map-page'>
                <div className='map-list'>
                    <h2>Areas</h2>
                    <ul className='map-areas'>
                        {this.areas}
                    </ul>
                    <h2>Parks</h2>
                    <ul className='park-maps'>
                        {this.areaParks}
                    </ul>
                </div>
                {this.getMap()}
            </div>
        )
    }
}