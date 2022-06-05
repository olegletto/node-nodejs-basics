export const remove = async () => {
    // Write your code here 
    const fs = require('fs');
    const path = require('path');

    fs.rm(
        path.join(__dirname, 'files', 'fileToRemove.txt'),
        err => {
            if (err) return console.error('FS operation failed');
            console.log('File deleted');
        }
    );
};