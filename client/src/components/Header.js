import React from "react";

export default function Header(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-${props.theme} navbar-expand-lg bg-body-tertiary border-bottom border-bottom-dark`}
        data-bs-theme={`${props.theme}`}
      >
        <div className="container-fluid">
          <div className="navbar-brand mx-auto">DocuFlex</div>
          <div className="navbar-text">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="themeButton"
                onClick={props.toggleTheme}
              />
              <label className="form-check-label" htmlFor="themeButton">
                {props.theme === "dark" ? "light" : "dark"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
