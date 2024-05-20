/**
 * Executes a function with the provided arguments and returns a Promise that resolves to the function's return value.
 * @template T The type of the function to execute.
 * @param {T} fn The function to execute.
 * @param {...Parameters<T>} args The arguments to pass to the function.
 * @returns {Promise<ReturnType<T>>} A Promise that resolves to the return value of the function.
 */
export const promisify = <T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>): Promise<ReturnType<T>> => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fn(...args);
            resolve(res);
        } catch (error) {
            reject(error);
        }
    });
};
