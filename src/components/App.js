import { useState, useEffect } from "react";
import Wheel from "./Wheel";
import PersonalPage from "./PersonalPage";
import HomePage from "./HomePage";
import Project from "./Project";
import Login from "./Login";
import Signup from "./Signup";
import Navigation from "./Navigation";

import CustomCursor from "./CustomCursor/CustomCursor";
import "../sass/main.scss";
import { Route, Link, Switch, useHistory } from "react-router-dom";

const URL = 'https://art-projects-server.onrender.com'

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    fetch("https://art-projects-server.onrender.com/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const onLogin = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <>
      {loading ? (
        <span className="loader"></span>
      ) : (
        <div className="App">
          <CustomCursor />
          {user ? <Navigation setUser={setUser} user={user} /> : null}

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <Login onLogin={onLogin} />
            </Route>
            <Route exact path="/signup">
              <Signup onLogin={onLogin} />
            </Route>
            <Route exact path="/projects">
              <Wheel />
            </Route>
            <Route exact path="/projects/:id">
              <Project user={user} />
            </Route>

            <Route exact path="/me">
              {!user ? (
                <span className="loader"></span>
              ) : (
                <PersonalPage user={user} />
              )}
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
