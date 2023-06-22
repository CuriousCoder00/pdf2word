const groupdocs_conversion_cloud = require("groupdocs-conversion-cloud");
const fs = require("fs");

let clientId = process.env.CLIENT_ID;
let clientSecret = process.env.CLIENT_SECRET;
let myStorage = process.env.MY_STORAGE;

const config = new groupdocs_conversion_cloud.Configuration(
  clientId,
  clientSecret
);
config.apiBaseUrl = "https://api.groupdocs.cloud";

let resourceFolder = "C:\\Files\\pdf2word-uploads\\sample.pdf";
fs.readFile(resourceFolder, (err, fileStream) => {
  let fileApi = groupdocs_conversion_cloud.FileApi.fromConfig(config);

  let request = new groupdocs_conversion_cloud.UploadFileRequest(
    "pdf2word-uploads",
    fileStream,
    myStorage
  );

  fileApi.uploadFile(request);
});

let convertApi = groupdocs_conversion_cloud.ConvertApi.fromKeys(
  clientId,
  clientSecret
);

let settings = new groupdocs_conversion_cloud.ConvertSettings();
settings.filePath = "sample.pdf";
settings.format = "docx";
settings.outputPath = "output";

request = new groupdocs_conversion_cloud.ConvertDocumentRequest(settings);

result = convertApi.convertDocument(request);
console.log("Document Converted Successfully: " + result[0]);




// construct FileApi
fileApi = groupdocs_conversion_cloud.FileApi.fromConfig(config);

// create download file request
request = new groupdocs_conversion_cloud.DownloadFileRequest(
  "output/sample.docx",
  myStorage
);

// download file
response = fileApi.downloadFile(request);

// save file in your working directory
fs.writeFile("C:\\Files\\sample.docx", response, "binary", (err)=>{console.log(err);});
console.log(response);
