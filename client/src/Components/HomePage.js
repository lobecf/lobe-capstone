import { useEffect, useState } from "react";
import NewInviteForm from "./NewInviteForm";
import InviteList from "./InviteList";

function HomePage() {
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    // no need to use http://localhost:3000 here
    fetch("/invites")
      .then((r) => r.json())
      .then((invitesArray) => {
        setInvites(invitesArray);
      });
  }, []);

  function handleAddInvite(newInvite) {
    const updatedInvitesArray = [...invites, newInvite];
    setInvites(updatedInvitesArray);
  }

  const displayedInvites = invites.filter((invite) => {
    return invite.title});

  return (
    <main>
      <NewInviteForm onAddInvite={handleAddInvite} />
      <InviteList invites={displayedInvites} />
    </main>
  );
}

export default HomePage;
