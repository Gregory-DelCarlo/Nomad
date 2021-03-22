import React from 'react';
import Weather from '../weather/weather_container'

export default class Park extends React.Component {
    constructor(props) {
        super(props)
        this.getMap = this.getMap.bind(this);
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
    getTrails() {
        
    }

    render() {
        return(
            <div className='map-page'>
                <div className='map-list'>
                <ul className='map-areas'>
                    <li className='area-name'>Northern California</li>
                    <li className='area-name'>Central California</li>
                    <li className='area-name'>Southern California</li>
                </ul>
                </div>
                {this.getMap()}
            </div>
        )
    }
}