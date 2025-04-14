"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST_STATE = void 0;
const AR_json_1 = __importDefault(require("./AR.json"));
const BR_json_1 = __importDefault(require("./BR.json"));
const CL_json_1 = __importDefault(require("./CL.json"));
const CO_json_1 = __importDefault(require("./CO.json"));
const ES_json_1 = __importDefault(require("./ES.json"));
const MX_json_1 = __importDefault(require("./MX.json"));
const PA_json_1 = __importDefault(require("./PA.json"));
const PE_json_1 = __importDefault(require("./PE.json"));
const PY_json_1 = __importDefault(require("./PY.json"));
const US_json_1 = __importDefault(require("./US.json"));
const UY_json_1 = __importDefault(require("./UY.json"));
const VE_json_1 = __importDefault(require("./VE.json"));
const enum_1 = require("../shared/enum");
exports.LIST_STATE = {
    [enum_1.CountryEnum.AR]: AR_json_1.default,
    [enum_1.CountryEnum.BR]: BR_json_1.default,
    [enum_1.CountryEnum.CL]: CL_json_1.default,
    [enum_1.CountryEnum.CO]: CO_json_1.default,
    [enum_1.CountryEnum.ES]: ES_json_1.default,
    [enum_1.CountryEnum.MX]: MX_json_1.default,
    [enum_1.CountryEnum.PA]: PA_json_1.default,
    [enum_1.CountryEnum.PE]: PE_json_1.default,
    [enum_1.CountryEnum.PY]: PY_json_1.default,
    [enum_1.CountryEnum.US]: US_json_1.default,
    [enum_1.CountryEnum.UY]: UY_json_1.default,
    [enum_1.CountryEnum.VE]: VE_json_1.default,
};
