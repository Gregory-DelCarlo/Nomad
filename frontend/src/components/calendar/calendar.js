
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class Calendar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                
            />
        )
    }
}
