import { rename } from 'node:fs';
import { pathToFile } from '../pathToFile.js';

export const renameFile = async () => {
    // Write your code here

    rename(
        pathToFile(import.meta.url, 'files', 'wrongFilename.txt'),
        pathToFile(import.meta.url, 'files', 'properFilename.md'),
        err => {
            if (err) return console.error('FS operation failed');
            console.log('The file has been renamed');
        }
    );
};

renameFile();