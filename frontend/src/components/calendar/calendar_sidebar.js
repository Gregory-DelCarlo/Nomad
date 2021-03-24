import React from 'react'
import { formatDate } from '@fullcalendar/react'
import {Link} from 'react-router-dom'

export function Sidebar(props) {
    
    return (
        <div className='calendar-sidebar'>
            <div className='calendar-sidebar-section'>
                <label>
                    <input
                        type='checkbox'

                        checked={props.toggled}

                        onChange={props.onChange}
                    ></input>
                            toggle weekends
                    </label>
            </div>
            <div className='calendar-sidebar-section'>
                <h2>All Hikes({props.trips.length})</h2>
                <ul>
                    {props.trips.map(renderSidebarEvent)}
                </ul>
            </div>
        </div>
    )
}

function renderSidebarEvent(event) {
    return (
        <li key={event.id}>
            <Link className='cal-trip-link' to={`/trips`}>
                <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
                <i>{event.title}</i>
            </Link>
        </li>
    )
}

