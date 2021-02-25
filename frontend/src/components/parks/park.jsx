import React from 'react';

export default class Park extends React.Component {
    constructor(props) {
        super(props);

        this.sourceMap = this.sourceMap.bind(this);
    }

    componentDidMount() {
        this.props.getPark().then(() => (
            this.sourceMap()
        ))
        // this.sourceMap();
        // this.props.getPark()
    }
    
    // componentWillUnMount() {
    //     // debugger
    // }

    sourceMap() {
        var script = document.createElement("script");
        script.setAttribute("src", "https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js");
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    render() {
        if (!this.props.park) return null;
        return(
    
            <div className="map-container" >
                <div className="map-info">
                    <iframe width="800" height="133" frameborder="0" src={`https://www.trailforks.com/widgets/region_info/?rid=${this.props.park.rid}&counts=1&stats=1&title=1&w=800px&h=133&activitytype=6`}></iframe>
                </div>
                <div className="map-widget">
                <iframe width="800" height="400" frameborder="0" allowfullscreen src={`https://www.trailforks.com/widgets/region_map/?rid=${this.props.park.rid}&w=800px&h=400px&activitytype=6&maptype=trailforks&trailstyle=difficulty&controls=0&list=1&layers=labels,poi,polygon,directory,region&z=&lat=&lon=&hideunsanctioned=0`}></iframe>
                </div>
            </div>
        )

    }
}