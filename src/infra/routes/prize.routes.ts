import { Router } from "express";

import { makePrizeController } from "../../factories";

export default (router: Router): void => {
  const { find, create } = makePrizeController();

  router.get('/prize', find);
  router.post('/prize', create);
};