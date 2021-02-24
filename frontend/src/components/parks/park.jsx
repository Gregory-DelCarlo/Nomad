import React from 'react';

export default class Park extends React.Component {
    constructor(props) {
        super(props);

        this.sourceMap = this.sourceMap.bind(this);
    }

    componentDidMount() {
        
        this.sourceMap();
    }


    sourceMap() {
        var script = document.createElement("script");
        script.setAttribute("src", "https://es.pinkbike.org/ttl-86400/sprt/j/trailforks/widget.js");
        document.getElementsByTagName("head")[0].appendChild(script);
        var widgetCheck = false;
    }

    render() {
            return(
        
                <div className="map-container" >
                    <div className="TrailforksRegionInfo" data-w="800px" data-h="150px" data-rid={this.props.park.rid} data-counts="1" data-stats="1"></div>
                    <div className="TrailforksWidgetMap" data-w="800px" data-h="400px" data-rid={this.props.park.rid} data-activitytype="6" data-maptype="trailforks" data-trailstyle="difficulty" data-controls="0" data-list="1" data-dml="1" data-layers="trail,labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>
                </div>
            )

    }
}