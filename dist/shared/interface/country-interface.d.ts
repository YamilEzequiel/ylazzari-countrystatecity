/**
 * @interface CountryMoney
 * @description Interface for the country money object
 */
export interface CountryMoney {
    symbol: string;
    name: string;
    code: string;
}
/**
 * @interface Country
 * @description Interface for the country object
 */
export interface Country {
    es: string;
    en: string;
    money: CountryMoney;
    flag: string;
    phone: string;
    key: string;
}
/**
 * @interface CountryList
 * @description Interface for the country list object
 */
export interface CountryList {
    [key: string]: Country;
}
