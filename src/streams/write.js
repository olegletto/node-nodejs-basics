import { createWriteStream } from 'node:fs';
import { pathToFile } from '../pathToFile.js';

export const write = async () => {
    // Write your code here
    const destFile = pathToFile(import.meta.url, 'files', 'fileToWrite.txt');
    const output = createWriteStream(destFile, 'utf-8');
    process.stdin.pipe(output)
};
write();
