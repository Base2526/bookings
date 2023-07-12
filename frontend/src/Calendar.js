import React, { Fragment, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Calendar as BigCalendar, Views, DateLocalizer, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import { useNavigate } from "react-router-dom";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";

import DemoLink from './DemoLink.component'
import events from './events'
import Year from './Year'

const localizer = momentLocalizer(moment);
localizer.formats.yearHeaderFormat = 'YYYY'

const Calendar = (props) => {
  const navigate = useNavigate();
  const [myEvents, setEvents] = useState(events)

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState(Views.MONTH);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Event name')
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }])
      }
      console.log("handleSelectSlot ", start, end)
    }, [setEvents]
  )

  const handleSelectEvent = useCallback(
    (event) => {
      console.log("handleSelectEvent")
      window.alert(event.title)
    },
    []
  )

  const handleDateChange = newDate => {
    setCurrentDate(newDate);
  };

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date( /*2015, 3, 12*/ ),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  )

  return (
    <Fragment>
      <DemoLink fileName="selectable">
        <strong onClick={()=>navigate(-1)}>
            Back home
        </strong>
      </DemoLink>
      <div className="height600">
        <BigCalendar
          defaultDate={currentDate}
          date={currentDate}
          onNavigate={handleDateChange}
          // defaultView={currentView}
          onView={handleViewChange}
          view={currentView}
          views={{
            day: true,
            week: true,
            month: true,
            year: Year
          }}
          onDateChange={newDate=>{
            handleViewChange(Views.DAY)
            handleDateChange(newDate)
          }}
          messages={{ year: 'Year' }}
          events={myEvents}
          localizer={localizer}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          scrollToTime={scrollToTime}
          style={{ height: 600 }}
        />
      </div>
    </Fragment>
  )
}

// Selectable.propTypes = {
//   localizer: PropTypes.instanceOf(DateLocalizer),
// }

export default Calendar 