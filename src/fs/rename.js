export const rename = async () => {
    // Write your code here
    const fs = require('fs');
    const path = require('path');

    fs.rename(
        path.join(__dirname, 'files', 'wrongFilename.txt'),
        path.join(__dirname, 'files', 'properFilename.md'),
        err => {
            if (err) return console.error('FS operation failed');
            console.log('Файл переименован');
        }
    );
};