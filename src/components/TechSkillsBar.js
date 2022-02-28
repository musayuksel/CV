import React from "react";

export default function TechSkillsBar({ name, percentage }) {
  return (
    <li>
      {name}
      <div
        style={{ width: "100%", height: "5px", backgroundColor: "#4b74b54b" }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "5px",
            backgroundColor: "#4b74b5",
          }}
        ></div>
      </div>
    </li>
  );
}
