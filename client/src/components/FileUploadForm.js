import React, { useState } from "react";

const FileUploadForm = (props) => {
  const [toggleDownload, setToggleDownload] = useState("");
  const handleConversion = () => {
    const inputFile = document.getElementById("inputFile");
    if (inputFile.files.length === 0) {
      setToggleDownload("disabled");
      alert("Please select a file to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("file", inputFile.files[0]);
    fetch("/api/convert", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "converted.docx";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((err) => console.error(err));
  }
  return (
    <div className={`container text-${props.theme === "dark" ? "light" : "dark"} text-center`}>
      <div className="fs-4 mb-3">Upload Your File Here</div>
      <div className="input-group mb-3 w-75 mx-auto">
        <input type="file" className="form-control" id="inputFile" accept=".pdf"/>
      </div>
      <button type="button" onClick={handleConversion} className={`btn btn-outline-${props.theme==="dark"?"primary":"dark"} mb-4`} toggleDownload>Download Converted File</button>
    </div>
  );
}

export default FileUploadForm;
