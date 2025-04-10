"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_list_1 = require("./state-list");
class StateService {
    constructor() {
        this.getStatesByCountry = (country) => {
            return state_list_1.LIST_STATE[country];
        };
    }
}
exports.default = StateService;
