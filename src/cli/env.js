export const parseEnv = () => {
    // Write your code here 
    Object.entries(process.env).map(([key, value]) => {
        if (key.includes('RSS_')) {
            console.log(`${key}=${value}`)
        }
    })
};

