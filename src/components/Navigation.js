import React from "react";
import { useHistory } from "react-router-dom";

export default function Navigation({ user, setUser }) {
  const history = useHistory();
  function handleLogoutClick() {
    fetch("https://art-projects-server.onrender.com/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push(`/`);
      }
    });
  }

  return (
    <div className="Navigation">
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="/projects" className="navigation__link">
                All projects.
              </a>
            </li>

            <li className="navigation__item">
              <a href="/me" className="navigation__link">
                My projects.
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                Add new.
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" onClick={handleLogoutClick} className="navigation__link">
                Log out.
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
