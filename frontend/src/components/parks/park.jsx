import React from 'react';
import Weather from '../weather/weather_container'

export default class Park extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.rid) return null;
        return(
            <div className="map-page">
                <Weather/>
                <div className="map-container">
                    <div className="map-info">
                        <iframe title='region info' width="800" height="133" frameBorder="0" src={`https://www.trailforks.com/widgets/region_info/?rid=${this.props.rid}&counts=1&stats=1&title=1&w=800px&h=133&activitytype=6`}></iframe>
                    </div>
                    <div className="map-widget">
                        <iframe title='region map' width="800" height="400" frameBorder="0" allowFullScreen src={`https://www.trailforks.com/widgets/region_map/?rid=${this.props.rid}&w=800px&h=400px&activitytype=6&maptype=trailforks&trailstyle=difficulty&controls=0&list=1&layers=labels,poi,polygon,directory,region&z=&lat=&lon=&hideunsanctioned=0`}></iframe>
                    </div>
                </div>
            </div>
        )

    }
}