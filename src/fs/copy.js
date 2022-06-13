import { mkdir, readdir, writeFileSync, readFileSync } from 'node:fs'
import { pathToFile, pathToFolder } from '../pathToFile.js';

export const copy = async () => {
    // Write your code here 
    mkdir(
        pathToFolder(import.meta.url, 'files_copy'), err => {
            if (err) {
                return console.error('FS operation failed / mkdir');
            } else {
                console.log('Folder was created');

            }
        });

    readdir(
        pathToFolder(import.meta.url, 'files'),
        (err, files) => {
            if (err)
                console.error('FS operation failed');
            else {
                files.forEach(file => {
                    writeFileSync(
                        pathToFile(import.meta.url, 'files_copy', file),
                        readFileSync(
                            pathToFile(import.meta.url, 'files', file),
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
copy();
