export const create = async () => {
    // Write your code here 
    const fs = require('fs');
    const path = require('path');

    fs.access(
        path.join(__dirname, 'files', 'fresh.txt'),
        (err) => {
            if (err) {
                fs.writeFile(
                    path.join(__dirname, 'files', 'fresh.txt'),
                    'I am fresh and young',
                    (err) => {
                        if (err) return console.error('FS operation failed');
                        console.log('Файл был создан');
                    }
                );
            } else {
                console.log('FS operation failed / Файл уже существует');
            }
        }
    )
};