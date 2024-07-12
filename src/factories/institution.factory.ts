import { InstitutionController } from "../controllers";
import { InstitutionService } from "../services";

export const makeInstitutionService = () => {
  return new InstitutionService();
};

export const makeInstitutionController = () => {
  return new InstitutionController(
    makeInstitutionService(),
  );
};
