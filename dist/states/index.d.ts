import { State } from "@/shared/interface/state-interface";
import { StateEnum } from "@/shared/enum/state-enum";
export default class StateService {
    constructor();
    getStatesByCountry: (country: StateEnum) => State[];
}
