export const parseArgs = () => {
    // Write your code here
    const args = process.argv.slice(2);
    args.map((item, i, arr) => {
        if (item.includes('--')) {
            console.log(`${item} is ${arr[i + 1]}`);
        }
    });
}
