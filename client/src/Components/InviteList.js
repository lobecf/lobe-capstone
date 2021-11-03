import InviteCard from "./InviteCard";

function InviteList({ invites }) {
  return (
    <ul className="cards">
      {invites.map((invite) => {
        return <InviteCard key={invite.id} invite={invite} />;
      })}
    </ul>
  );
}

export default InviteList;
