import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {createEventId } from './event-utils'
import {fetchUserTrips} from '../../actions/trip_actions'

export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.allUserTrips = this.allUserTrips.bind(this)
        this.state = {
        weekendsVisible: true,
            currentEvents: []

        }
    }


    componentDidMount() {
        this.props.getUserTrips(this.props.userId);
        this.setState({ currentEvents: this.props.trips });
    }
    
   allUserTrips(){
    
        this.state.currentEvents.map(
            ((trip) => {
                return ({
                    id: trip._id,
                    title: trip.title,
                    start: trip.startDate,
                    end: trip.endDate,
                })
            }) 
       )
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
                        weekends={this.state.weekendsVisible}
                        select={this.handleDateSelect}
                        intialEvents={this.state.currentEvents}
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
                            checked={this.state.weekendsVisible}
                            onChange={this.handleWeekendsToggle}
                        ></input>
                            toggle weekends
                    </label>
                </div>
                <div className='calendar-sidebar-section'>
                    <h2>All Hikes({this.state.currentEvents.length})</h2>
                    <ul>
                        {this.state.currentEvents.map(renderSidebarEvent)}
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

    handleDateSelect = (selectInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    

    handleEvents = (events) => {
        this.setState({
            currentEvents: events
        })
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


// removehike = () => {
//     clickInfo.event.remove()
// }


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
