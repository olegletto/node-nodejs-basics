export const list = async () => {
    // Write your code here 
    const fs = require('fs');
    const path = require('path');

    fs.readdir(
        path.join(__dirname, 'files'),
        (err, files) => {
            if (err)
                console.error('FS operation failed');
            else {
                files.forEach(file => {
                    console.log(file);
                })
            }
        })
};