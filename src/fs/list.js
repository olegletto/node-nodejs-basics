import { readdir } from 'node:fs'
import { pathToFolder } from '../pathToFile.js';

export const list = async () => {
    // Write your code here 

    readdir(
        pathToFolder(import.meta.url, 'files'),
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

list();