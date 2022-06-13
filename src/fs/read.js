import { readFile } from 'node:fs';
import { pathToFile } from '../pathToFile.js';

export const read = async () => {
    // Write your code here 

    readFile(
        pathToFile(import.meta.url, 'files', 'fileToRead.txt'),
        'utf-8',
        (err, data) => {
            if (err) return console.error('FS operation failed');
            console.log(data);
        }
    );
};
read();
