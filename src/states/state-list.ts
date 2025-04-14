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
import { CountryEnum } from "../shared/enum";

export const LIST_STATE: { [key in CountryEnum]: State[] } = {
  [CountryEnum.AR]: AR_STATES,
  [CountryEnum.BR]: BR_STATES,
  [CountryEnum.CL]: CL_STATES,
  [CountryEnum.CO]: CO_STATES,
  [CountryEnum.ES]: ES_STATES,
  [CountryEnum.MX]: MX_STATES,
  [CountryEnum.PA]: PA_STATES,
  [CountryEnum.PE]: PE_STATES,
  [CountryEnum.PY]: PY_STATES,
  [CountryEnum.US]: US_STATES,
  [CountryEnum.UY]: UY_STATES,
  [CountryEnum.VE]: VE_STATES,
};
