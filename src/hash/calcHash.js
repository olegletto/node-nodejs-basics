import { readFile } from 'fs';
import { pathToFile } from '../pathToFile.js';
import { createHash } from 'node:crypto';

export const calculateHash = async () => {
    // Write your code here 

    readFile(
        pathToFile(import.meta.url, 'files', 'fileToCalculateHashFor.txt'),
        'utf-8',
        (err, text) => {
            if (err) return console.error('FS operation failed');
            const hash = createHash('sha256').update(text).digest('hex');
            console.log(hash)
        }
    );
};

calculateHash();