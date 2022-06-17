import { Transform, pipeline } from 'node:stream';

export const transform = async () => {
    // Write your code here 

    const reverse = new Transform({
        transform(chunk, _, callback) {
            callback(null, `${chunk.reverse()}\n`);
        }
    });

    pipeline(
        process.stdin,
        reverse,
        process.stdout,
        err => {
            if (err) {
                console.log('Error', error.message)
            }
        }
    );
};
transform();
