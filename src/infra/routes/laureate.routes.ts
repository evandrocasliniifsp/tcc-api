import { Router } from "express";

import { makeLaureateController } from "../../factories";

export default (router: Router): void => {
  const { find, create } = makeLaureateController();

  router.get('/laureate', find);
  router.post('/laureate', create);
};