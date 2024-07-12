import { LaureateController } from "../controllers";
import { LaureateService } from "../services";

export const makeLaureateService = () => {
  return new LaureateService();
};

export const makeLaureateController = () => {
  const laureateService = makeLaureateService();
  return new LaureateController(
    laureateService,
  );
};
