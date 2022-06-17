import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { pathToFile } from '../pathToFile.js';


export const performCalculations = async () => {
    // Write your code here
    const cp = cpus();
    let number = 10;
    const workerFolder = pathToFile(import.meta.url, './', 'worker.js')

    const arrOfWorkers = await Promise.allSettled(cp.map(() => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerFolder, { workerData: number++ });
            worker.on('message', msg => resolve(msg));
            worker.on('error', msg => reject(msg));
        })
    }));

    const result = arrOfWorkers.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null
    }))

    console.log(result);

    return result;

};
performCalculations();
