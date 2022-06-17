import { parentPort, workerData } from 'worker_threads';
// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    if (Math.random() > 0.6) throw new Error('oops!');
    parentPort.postMessage(nthFibonacci(workerData));
};
sendResult();
