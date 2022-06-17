import { createReadStream } from 'node:fs';
import { pathToFile } from '../pathToFile.js';

export const read = async () => {
    // Write your code here 
    const file = pathToFile(import.meta.url, 'files', 'fileToReads.txt')
    const stream = createReadStream(file, 'utf-8');

    let data = '';

    stream.on('data', chunk => data += chunk);
    stream.on('end', () => process.stdout.write(data));
    stream.on('error', error => console.log('Error', error.message));
};

read();
