import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
export default function DatesAndLocations({ startDate, endDate, location }) {
  return (
    <div>
      <FaRegCalendarAlt />
      <span>{`${startDate} - ${endDate}`}</span>
      <MdOutlineLocationOn />
      <span>{location}</span>
    </div>
  );
}
