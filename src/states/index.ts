
import { State } from "@/shared/interface/state-interface";
import { LIST_STATE } from "./state-list";
import { StateEnum } from "@/shared/enum/state-enum";

export default class StateService {

  constructor() {}

  public getStatesByCountry = (country: StateEnum): State[] => {
    return LIST_STATE[country];
  };

}