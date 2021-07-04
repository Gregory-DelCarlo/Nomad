import React from 'react';
import WeatherContainer from '../weather/weather_container'

export default class Park extends React.Component {
    constructor(props) {
        super(props);

        this.getMap = this.getMap.bind(this);
        this.setParkAreas = this.setParkAreas.bind(this);
        this.renderParks = this.renderParks.bind(this);
        this.renderWeather = this.renderWeather.bind(this);
        this.fetchData = this.fetchData.bind(this)

        this.state = {
            areas: [
                <li className='area-name' key='a1'><button onClick={() => this.setState({area: 'north'})}>Northern California</button></li>,
                <li className='area-name' key='b2'><button onClick={() => this.setState({area: 'central'})}>Central California</button></li>,
                <li className='area-name' key='c3'><button onClick={() => this.setState({area: 'south'})}>Southern California</button></li>
            ],
            north: [],
            south: [],
            central: [],
            area: ''
        };
    }

    componentDidMount() {
        this.props.getParks();
        this.setParkAreas();
        
    }

    getMap() {
        if (!this.props.parkRid) return null;
        return(
                <div className="map-container">
                    <div className="map-info">
                        <iframe title='region info' width="900" height="133" frameBorder="0" src={`https://www.trailforks.com/widgets/region_info/?rid=${this.props.parkRid}&counts=1&stats=1&title=1&w=800px&h=133&activitytype=6`}></iframe>
                    </div>
                    <div className="map-widget">
                        <iframe className='render-map' title='region map' width="900" height="500" frameBorder="0" allowFullScreen src={`https://www.trailforks.com/widgets/region_map/?rid=${this.props.parkRid}&w=900px&h=500px&activitytype=6&maptype=trailforks&trailstyle=difficulty&controls=0&list=1&layers=labels,poi,polygon,directory,region&z=&lat=&lon=&hideunsanctioned=0`}></iframe>
                    </div>
                </div>
        )
    }

    fetchData(parkKey) {
        this.props.receivePark(parkKey)
        this.props.fetchWeather(this.props.parks[parkKey])
    }

    setParkAreas() {
        Object.keys(this.props.parks).forEach( parkKey => {
            switch (this.props.parks[parkKey].location) {
                case 'Northern California':
                    this.state.north.push(<li className='park-name' key={parkKey}>
                                            <button onClick={() => this.fetchData(parkKey)}>
                                                {this.props.parks[parkKey].name}
                                            </button>
                                          </li>);
                    return null;
                case 'Central California':
                    this.state.central.push(<li className='park-name' key={parkKey}>
                                            <button onClick={() => this.fetchData(parkKey)}>
                                                {this.props.parks[parkKey].name}
                                            </button>
                                            </li>);
                    return null;
                case 'Southern California':
                    this.state.south.push(<li className='park-name' key={parkKey}>
                                            <button onClick={() => this.fetchData(parkKey)}>
                                                {this.props.parks[parkKey].name}
                                            </button>
                                            </li>);
                    return null;
            }
        });
    }

    renderParks() {
        return this.state[this.state.area];
    }

    renderWeather() {
        if(this.props.parkRid) {
            return <WeatherContainer parkName={this.props.parkName}/>
        }
    }

    render() {
        return(
            <div className='map-page'>
                <div className='map-list'>
                    <h2>Areas</h2>
                        <ul className='map-areas'>
                            {this.state.areas}
                        </ul>
                    <h2>Parks</h2>
                        <ul className='park-maps'>
                            {this.renderParks()}
                        </ul>
                </div>
                {this.getMap()}
                <div className='weather-box'>
                    {this.renderWeather()}
                </div>
            </div>
        )
    }
}