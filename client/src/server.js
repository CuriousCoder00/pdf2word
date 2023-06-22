const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const { PDFExtract } = require('pdf.js-extract');

const app = express();
const upload = multer({ dest: './uploads/' });
const pdfExtract = new PDFExtract();

app.use(express.static('public'));

app.post('/convert', upload.single('pdfFile'), async (req, res) => {
  try {
    const { path: pdfPath } = req.file;
    const outputPath = './converted/output.docx';

    // Read the PDF file
    const pdfBytes = fs.readFileSync(pdfPath);

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

    res.json({ message: 'PDF converted to Word successfully!' });
  } catch (error) {
    console.error('Error converting PDF to Word:', error);
    res.status(500).json({ error: 'Failed to convert PDF to Word.' });
  } finally {
    fs.unlinkSync(req.file.path); // Delete the uploaded PDF file
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
