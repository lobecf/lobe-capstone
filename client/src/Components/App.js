import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar  from "./NavBar";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main className="body-fill">
        {user ? (
          <Switch>
            <Route path="/">
              <HomePage user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
