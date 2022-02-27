import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
export default function DatesAndLocations({ startDate, endDate, location }) {
  return (
    <div className="dates-locations-container">
      <div>
        <FaRegCalendarAlt className="calender-icon" />
        <p>{`${startDate} - ${endDate}`}</p>
      </div>
      <div>
        <MdOutlineLocationOn className="location-icon" />
        <p>{location}</p>
      </div>
    </div>
  );
}
