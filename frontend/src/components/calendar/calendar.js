import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {Sidebar} from './calendar_sidebar'

export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.handleWeekendsToggle = this.handleWeekendsToggle.bind(this)
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
                    <Sidebar
                        toggled={this.state.weekendsVisible}
                        onChange={this.handleWeekendsToggle}
                        trips={this.props.trips}
                    />
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
                        events={this.props.trips}
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

    
    handleWeekendsToggle = () => {
        this.setState({
          weekendsVisible: !this.state.weekendsVisible
        })
      }
   
}

// // function renderEventContent(eventInfo) {
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

