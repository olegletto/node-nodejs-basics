import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export const pathToFile = (url, folderName, fileName) => {
    const __dirname = dirname(fileURLToPath(url));
    return path.join(__dirname, folderName, fileName);
}

export const pathToFolder = (url, folderName) => {
    const __dirname = dirname(fileURLToPath(url));
    return path.join(__dirname, folderName);
}