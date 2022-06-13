import { rm } from 'node:fs';
import { pathToFile } from '../pathToFile.js';

export const remove = async () => {
    // Write your code here 

    rm(
        pathToFile(import.meta.url, 'files', 'fileToRemove.txt'),
        err => {
            if (err) return console.error('FS operation failed');
            console.log('File deleted');
        }
    );
};

remove();
