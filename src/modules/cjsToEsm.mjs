// const path = require('path');
// const { release, version } = require('os');
// const { createServer: createServerHttp } = require('http');
// require('./files/c');

import path from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
// import './files/c'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

console.log({
    unknownObject,
    createMyServer,
});

export {
    unknownObject,
    createMyServer,
};