import AR_STATES from "./AR.json";
import BR_STATES from "./BR.json";
import CL_STATES from "./CL.json";
import CO_STATES from "./CO.json";
import ES_STATES from "./ES.json";
import MX_STATES from "./MX.json";
import PA_STATES from "./PA.json";
import PE_STATES from "./PE.json";
import PY_STATES from "./PY.json";
import US_STATES from "./US.json";
import UY_STATES from "./UY.json";
import VE_STATES from "./VE.json";

import { State } from "../shared/interface/state-interface";
import { StateEnum } from "../shared/enum";

export const LIST_STATE: { [key in StateEnum]: State[] } = {
  [StateEnum.AR]: AR_STATES,
  [StateEnum.BR]: BR_STATES,
  [StateEnum.CL]: CL_STATES,
  [StateEnum.CO]: CO_STATES,
  [StateEnum.ES]: ES_STATES,
  [StateEnum.MX]: MX_STATES,
  [StateEnum.PA]: PA_STATES,
  [StateEnum.PE]: PE_STATES,
  [StateEnum.PY]: PY_STATES,
  [StateEnum.US]: US_STATES,
  [StateEnum.UY]: UY_STATES,
  [StateEnum.VE]: VE_STATES,
};
