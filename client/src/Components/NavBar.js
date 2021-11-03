import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className="nav-bar-container">
        <h1 className="neonText pulsate">EVENT INVITE APP
        </h1>
      <div>
      <Link className="nav-bar-link" to="/">HOME</Link>
        {user ? (
          <button className="logout-btn" onClick={handleLogoutClick}>LOGOUT</button>
        ) : (
          <>
            <Link className="nav-bar-link" to="/signup">SIGNUP</Link>
            <Link className="nav-bar-link" to="/login">LOGIN</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;