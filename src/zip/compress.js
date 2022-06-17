import { createReadStream, createWriteStream } from 'node:fs';
import { pathToFile } from '../pathToFile.js';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';

export const compress = async () => {
    // Write your code here 
    const sourceFile = pathToFile(import.meta.url, 'files', 'fileToCompress.txt')
    const input = createReadStream(sourceFile, 'utf-8');
    const destinationFile = pathToFile(import.meta.url, 'files', 'archive.gz');
    const output = createWriteStream(destinationFile);
    const gzip = createGzip();
    pipeline(
        input,
        gzip,
        output,
        err => {
            if (err) {
                console.log('Error', err.message)
            }
        }
    );
};
compress();
