import { createReadStream, createWriteStream } from 'node:fs';
import { pathToFile } from '../pathToFile.js';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';

export const decompress = async () => {
    // Write your code here 
    createUnzip
    const sourceFile = pathToFile(import.meta.url, 'files', 'archive.gz');
    const input = createReadStream(sourceFile);
    const destinationFile = pathToFile(import.meta.url, 'files', 'fileToCompress2.txt');
    const output = createWriteStream(destinationFile, 'utf-8');
    const unzip = createUnzip();
    pipeline(
        input,
        unzip,
        output,
        err => {
            if (err) {
                console.log('Error', err.message)
            }
        }
    );
};
decompress();
