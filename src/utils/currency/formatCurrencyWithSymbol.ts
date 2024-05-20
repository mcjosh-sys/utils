import { currencyFormatter } from './currencyFormatter';

/**
 * Formats a currency value with a specified symbol and adds a suffix for large numbers, using optional locales for localization.
 *
 * @param {number} value - The currency value to format.
 * @param {string} currency - The currency symbol or code to use in formatting.
 * @param {string | string[]} [locales] - Optional locales for localization. Defaults to an empty array.
 * @returns {string} - The formatted currency value with symbol and suffix.
 */
export function formatCurrencyWithSuffix(value: number, currency: string, locales?: string | string[]): string {
    const suffixes = ['', 'k', 'm', 'b', 't'];

    const suffixIndex = Math.floor(('' + value).length / 3); // Determine the index of the suffix based on the number of digits

    let formattedNumber = parseFloat((value / Math.pow(1000, suffixIndex)).toFixed(2)); // Divide the number by 1000^suffixIndex and round to 2 decimal places

    if (formattedNumber % 1 !== 0) {
        // Remove decimal if it's .00
        formattedNumber = +formattedNumber.toFixed(2);
    }

    const formatter = currencyFormatter(currency, locales);

    return formatter.format(formattedNumber) + suffixes[suffixIndex];
}
