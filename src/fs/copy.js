export const copy = async () => {
    // Write your code here 
    const fs = require('fs');
    const path = require('path');

    fs.mkdir(
        path.join(__dirname, 'files_copy'), err => {
            if (err) {
                return console.error('FS operation failed / mkdir');
            } else {
                console.log('Папка была создана');

            }
        });

    fs.readdir(
        path.join(__dirname, 'files'),
        (err, files) => {
            if (err)
                console.error('FS operation failed');
            else {
                files.forEach(file => {
                    fs.writeFileSync(
                        path.join(__dirname, 'files_copy', file),
                        fs.readFileSync(
                            path.join(__dirname, 'files', file),
                            'utf-8',
                            (err, data) => {
                                if (err) return console.error('FS operation failed / readFile');
                                else {
                                    return data;
                                }
                            }
                        ),
                        err => {
                            if (err) return console.error('FS operation failed / writeFile');
                            console.log('File copied');
                        }
                    )
                })
            }
        })
};