import { pathToFile } from '../pathToFile.js';
import { access, writeFile } from 'node:fs';

export const create = async () => {
    // Write your code here 
    access(
        pathToFile(import.meta.url, 'files', 'fresh.txt'),
        (err) => {
            if (err) {
                writeFile(
                    pathToFile(import.meta.url, 'files', 'fresh.txt'),
                    'I am fresh and young',
                    (err) => {
                        if (err) return console.error('FS operation failed');
                        console.log('File was created');
                    }
                );
            } else {
                console.log('FS operation failed / File already exist');
            }
        }
    )
};
create();
