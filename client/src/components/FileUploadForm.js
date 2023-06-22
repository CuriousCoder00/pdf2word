import React, { useState } from "react";
import axios from "axios";


function FileUploadForm(props) {
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {

  }
  return (
    <>
      <div className={`container px-3 text-${props.theme==='dark'?'light':'dark'}`}>
        <div className="d-flex justify-content-center mt-5">
          <div>
            <h1 className="">
              PDF2WORD{" "}
              <span style={{ color: "rgb(236 101 24)" }}>CONVERTER</span>
            </h1>
            <p>
              Convert your <span style={{ color: "rgb(236 101 24)" }}>PDF</span>{" "}
              to <span style={{ color: "rgb(236 101 24)" }}>WORD</span>{" "}
              documents.
            </p>
            <form onSubmit={handleSubmit} >
              <div className="mb-3" >
                <input
                onChange={handleFileChange}
                  className="form-control" 
                  type="file"
                  id="pdfFile"
                  accept=".pdf"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className={`btn btn-${props.theme==='dark'?'primary':'dark'}`}>
                  Convert to WORD Document
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FileUploadForm;
