 export const read = async () => {
    // Write your code here 
    const fs = require('fs');
    const path = require('path'); 

    fs.readFile(
        path.join(__dirname, 'files', 'fileToRead.txt'),
        'utf-8',
        (err, data) => {
            if (err) return console.error('FS operation failed');
            console.log(data);
        }
    );
};