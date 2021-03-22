import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'




export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.allUserTrips = this.allUserTrips.bind(this)
        this.weekendsVisible = true;
    
    }


    componentDidMount() {
        debugger
        this.props.fetchUserTrips(this.props.userId);
    }
    
   allUserTrips(){
  
       this.mapped = this.props.trips.map(
            ((trip) => {
                // debugger
                return ({
                    id: trip._id,
                    title: trip.title,
                    start: trip.startDate,
                    end: trip.endDate,
                })
            }) 
        )
      
        return this.mapped 
   }

    render() {
        return (
            <div className='calendar-whole'>
                {this.renderSidebar()}
                <div className='calendar-main'>
                    {/* style={{ width: 600 + "px" }} */}
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        aspectRatio='1.3'
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={this.props.weekendsVisible}
                        // select={this.handleDateSelect}
                        initialEvents={this.allUserTrips()}
                        eventContent={renderEventContent} // custom render function
                        eventClick={this.handleEventClick}
                        eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                    /* you can update a remote database when these fire:
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
                            checked={this.props.weekendsVisible}
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
        this.props.weekendsVisible = !this.props.weekendsVisible
    
    }
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}


// handleEventClick = (clickInfo) => {
//     if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//         clickInfo.event.remove()
//     }
// }

function renderSidebarEvent(event) {
    return (
        <li key={event.id}>
            <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
            <i>{event.title}</i>
        </li>
    )
}
