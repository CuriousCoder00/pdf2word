import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className={`container text-${props.theme === "dark" ? "secondary" : "dark"} mb-3`}>
        Experience the power of DocuPlex and unlock the full potential of your PDF files. Visit our website today at [Insert website URL] and join thousands of satisfied users who have revolutionized their document workflows.
      </div>
      <div className={`container text-${props.theme === "dark" ? "secondary" : "dark"} mb-3`}>

        Don't let the limitations of PDFs hold you back. Convert, edit, and collaborate effortlessly with DocuPlex - your ultimate PDF to Word conversion solution.
      </div>
      <div className={`container-fluid text-bg-${props.theme === "dark" ? "dark" : "light"} border-top border-top-dark`}>
        <div className={`text-center`}>
          <div className="fs-5">Made with ❤️ by Kapil</div>
          <div className={`text-secondary`} style={{ fontSize: '12px' }}>Copyright &copy; github.com/curiouscoder00 | All Rights Reserved</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
