import { LaureatePrizeController } from "../controllers";
import { LaureatePrizeService } from "../services";
import { makeInstitutionService } from "./institution.factory";
import { makeLaureateService } from './laureate.factory'
import { makePrizeService } from "./prize.factory";

export const makeLaureatePrizeService = () => {
  const laureateService = makeLaureateService();
  const prizeService = makePrizeService();
  const InstitutionService = makeInstitutionService();
  
  return new LaureatePrizeService(
    laureateService,
    prizeService,
    InstitutionService,
  );
};

export const makeLaureatePrizeController = () => {
  return new LaureatePrizeController(
    makeLaureatePrizeService(),
  );
}