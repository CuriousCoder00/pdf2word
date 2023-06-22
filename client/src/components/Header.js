import React from "react";

export default function Header(props) {
  
  return (
    <div>
      <nav className={`navbar navbar-${props.theme} navbar-expand-lg bg-body-tertiary`} data-bs-theme={`${props.theme}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DocuFlex
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  About
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="themeButton"
                  onClick={props.toggleTheme}/>
                <label className="form-check-label" htmlFor="themeButton"
                >
                  Enable {props.theme==='dark'?'light':'dark'} Mode
                </label>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
