const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const { PDFExtract } = require('pdf.js-extract');

const pdfExtract = new PDFExtract();

async function convertPdfToWord(inputPath, outputPath) {
  // Read the PDF file
  const pdfBytes = fs.readFileSync(inputPath);

  // Extract text from the PDF
  const { pages } = await pdfExtract.extractBuffer(pdfBytes, {});

  // Create a new Word document
  const doc = new PDFDocument();

  // Add extracted text to the Word document
  pages.forEach((page) => {
    const { width, height, content } = page;
    doc.addPage([width, height]);
    doc.drawText(content);
  });

  // Save the Word document to a file
  const docBytes = await doc.save();
  fs.writeFileSync(outputPath, docBytes);
}



const inputPath = 'input.pdf';
const outputPath = 'output.docx';

convertPdfToWord(inputPath, outputPath)
  .then(() => {
    console.log('PDF converted to Word successfully!');
  })
  .catch((error) => {
    console.error('Error converting PDF to Word:', error);
  });