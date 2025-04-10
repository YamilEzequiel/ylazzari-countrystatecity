"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const country_1 = require("./country");
const enum_1 = require("./shared/enum");
const states_1 = __importDefault(require("./states"));
/**
 * @constant country
 * @description Instance of the country service
 */
const country = new country_1.CountryService();
console.log(country.getAllCountries());
/**
 * @constant state
 * @description Instance of the state service
 */
const state = new states_1.default();
console.log(state.getStatesByCountry(enum_1.StateEnum.AR));
