import AR_STATES from "./AR.json";
import BO_STATES from "./BO.json";
import BR_STATES from "./BR.json";
import CL_STATES from "./CL.json";
import CO_STATES from "./CO.json";
import CR_STATES from "./CR.json";
import CU_STATES from "./CU.json";
import DO_STATES from "./DO.json";
import EC_STATES from "./EC.json";
import ES_STATES from "./ES.json";
import GT_STATES from "./GT.json";
import HN_STATES from "./HN.json";
import MX_STATES from "./MX.json";
import NI_STATES from "./NI.json";
import PA_STATES from "./PA.json";
import PE_STATES from "./PE.json";
import PY_STATES from "./PY.json";
import SV_STATES from "./SV.json";
import US_STATES from "./US.json";
import UY_STATES from "./UY.json";
import VE_STATES from "./VE.json";

import { State } from "../shared/interface/state-interface";
import { CountryEnum } from "../shared/enum";

export const LIST_STATE: { [key in CountryEnum]: State[] } = {
  [CountryEnum.AR]: AR_STATES,
  [CountryEnum.BO]: BO_STATES,
  [CountryEnum.BR]: BR_STATES,
  [CountryEnum.CL]: CL_STATES,
  [CountryEnum.CO]: CO_STATES,
  [CountryEnum.CR]: CR_STATES,
  [CountryEnum.CU]: CU_STATES,
  [CountryEnum.DO]: DO_STATES,
  [CountryEnum.EC]: EC_STATES,
  [CountryEnum.ES]: ES_STATES,
  [CountryEnum.GT]: GT_STATES,
  [CountryEnum.HN]: HN_STATES,
  [CountryEnum.MX]: MX_STATES,
  [CountryEnum.NI]: NI_STATES,
  [CountryEnum.PA]: PA_STATES,
  [CountryEnum.PE]: PE_STATES,
  [CountryEnum.PY]: PY_STATES,
  [CountryEnum.SV]: SV_STATES,
  [CountryEnum.US]: US_STATES,
  [CountryEnum.UY]: UY_STATES,
  [CountryEnum.VE]: VE_STATES,
};
