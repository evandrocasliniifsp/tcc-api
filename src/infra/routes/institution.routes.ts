import { Router } from "express";
import { makeInstitutionController } from "../../factories";

export default (router: Router): void => {
  const { find, create } = makeInstitutionController();

  router.get('/institution', find);
  router.post('/institution', create);
};