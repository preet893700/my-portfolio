import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

let dataBuffer = fs.readFileSync('My_Resume_Updated.pdf');

pdf(dataBuffer).then(function(data) {
    console.log("PDF_TEXT_START");
    console.log(data.text);
    console.log("PDF_TEXT_END");
}).catch(console.error);
