import { useState } from "react";

function InviteCard({ invite }) {
  const { title, description, address, startTime, endTime  } = invite;


  return (
    <li className="card">
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Address: {address}</p>
      <p>{startTime}{endTime}</p>
    </li>
  );
}

export default InviteCard;
