import React from 'react';

export default class Park extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (!this.props.park) return null;
        return(
            <div className="map-page" >
                <div className="map-container" >
                    <div className="map-info">
                        <iframe width="800" height="133" frameborder="0" src={`https://www.trailforks.com/widgets/region_info/?rid=${this.props.park.rid}&counts=1&stats=1&title=1&w=800px&h=133&activitytype=6`}></iframe>
                    </div>
                    <div className="map-widget">
                        <iframe width="800" height="400" frameborder="0" allowfullscreen src={`https://www.trailforks.com/widgets/region_map/?rid=${this.props.park.rid}&w=800px&h=400px&activitytype=6&maptype=trailforks&trailstyle=difficulty&controls=0&list=1&layers=labels,poi,polygon,directory,region&z=&lat=&lon=&hideunsanctioned=0`}></iframe>
                    </div>
                </div>
            </div>
        )

    }
}