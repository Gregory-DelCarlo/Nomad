import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'




export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    state = {
        weekendsVisible: true
    }

    componentDidMount() {
        this.props.fetchUserTrips(this.props.userId);
    }
    
    render() {
        return (
            <div className='calendar-whole'>
                {this.renderSidebar()}
                <div className='calendar-main'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        aspectRatio='1.4'
                        initialView='dayGridMonth'
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                         weekends={this.state.weekendsVisible}
                        initialEvents={this.props.trips}
                        eventClick={this.handleEventClick}
                        eventsSet={this.handleEvents} 
                        
                        
                        // called after events are initialized/added/changed/removed
                        /* you can update a remote database when these fire:
                    eventContent={renderEventContent} // custom render function
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                    />
                </div>
            </div>
        )
    }

    renderSidebar() {
        return (
            <div className='calendar-sidebar'>
                <div className='calendar-sidebar-section'>
                    <label>
                        <input
                            type='checkbox'
                            // checked={this.props.weekendsVisible}
                            checked={this.state.weekendsVisible}

                            onChange={this.handleWeekendsToggle}
                        ></input>
                            toggle weekends
                    </label>
                </div>
                <div className='calendar-sidebar-section'>
                    <h2>All Hikes({this.props.trips.length})</h2>
                    <ul>
                        {this.props.trips.map(renderSidebarEvent)}
                    </ul>
                </div>
            </div>
        )
    }
    
    handleWeekendsToggle = () => {
        this.setState({
          weekendsVisible: !this.state.weekendsVisible
        })
      }
   
}

function renderSidebarEvent(event) {
    return (
        <li key={event.id}>
            <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
            <i>{event.title}</i>
        </li>
    )
}
// function renderEventContent(eventInfo) {
//     return (
//         <>
//             <b>{eventInfo.timeText}</b>
//             <i>{eventInfo.event.title}</i>
//         </>
//     )
// }
// handleEventClick = (trip) => {
    
//     }
// }

