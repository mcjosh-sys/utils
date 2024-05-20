/**
 * Creates a currency formatter object with the specified currency and locales.
 *
 * @param {string} currency - The currency symbol or code to use in formatting.
 * @param {string | string[]} [locales] - Optional locales for localization.
 * @returns {Intl.NumberFormat} - The currency formatter object.
 */
export function currencyFormatter(currency: string, locales?: string | string[]): Intl.NumberFormat {
    const formatter = new Intl.NumberFormat(locales, {
        style: 'currency',
        currency,
    });

    return formatter;
}
