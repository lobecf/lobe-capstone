import { useState } from "react";

function NewInviteForm({ onAddInvite }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/invites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title, 
        description, 
        address, 
        end_time: endTime,
        start_Time: startTime
      }),
    })
      .then((r) => r.json())
      .then((newInvite) => onAddInvite(newInvite));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title of event"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewInviteForm;
