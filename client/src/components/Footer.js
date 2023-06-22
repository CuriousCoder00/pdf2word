import React from "react";

function Footer(props) {
  return (
    <div
      className="position-absolute container-fluid bottom-0"
    >
      <div className={`text-bg-${
        props.theme === "dark" ? "primary" : "light"} d-flex justify-content-center align-item-center fs-5`}>
        <p>Made with ❤️ by DocuFlex</p>
      </div>
      
    </div>
  );
}

export default Footer;
