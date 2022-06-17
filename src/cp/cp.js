import { pathToFile } from '../pathToFile.js';
import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    // Write your code here

    const childProcess = spawn('node', [pathToFile(import.meta.url, 'files', 'script.js'), ...args.split(' ')]);

    process.stdin.on('data', value => {
        childProcess.stdin.write(value);
    });

    childProcess.stdout.on('data', value => {
        console.log(value.toString())
    })
};
spawnChildProcess('--arg1 --arg2')