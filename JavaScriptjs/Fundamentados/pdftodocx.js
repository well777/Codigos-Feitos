const fs = require('fs');
const path = require('path');
const libre = require('libreoffice-convert');
const mammoth = require('mammoth');

function pdfToDocx(pdfPath, docxPath) {
    const file = fs.readFileSync(pdfPath);
    libre.convert(file, '.docx', undefined, (err, done) => {
        if (err) {
            console.error(`Erro ao converter PDF para DOCX: ${err}`);
            return;
        }
        fs.writeFileSync(docxPath, done);
        console.log(`PDF convertido para ${docxPath}`);
    });
}


function docxToPdf(docxPath, pdfPath) {
    const file = fs.readFileSync(docxPath);
    libre.convert(file, '.pdf', undefined, (err, done) => {
        if (err) {
            console.error(`Erro ao converter DOCX para PDF: ${err}`);
            return;
        }
        fs.writeFileSync(pdfPath, done);
        console.log(`DOCX convertido para ${pdfPath}`);
    });
}

