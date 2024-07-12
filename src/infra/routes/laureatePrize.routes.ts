import { Router } from "express";
import { makeLaureatePrizeController } from "../../factories";

export default (router: Router): void => {
  const { find, create } = makeLaureatePrizeController();

  router.get('/laureate/prize', find);
  router.post('/laureate/prize', create);
};