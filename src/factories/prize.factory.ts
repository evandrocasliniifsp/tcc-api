import { PrizeController } from "../controllers";
import { PrizeService } from "../services"

export const makePrizeService = () => {
  return new PrizeService();
};

export const makePrizeController = () => {
  return new PrizeController(
    makePrizeService(),
  );
};
