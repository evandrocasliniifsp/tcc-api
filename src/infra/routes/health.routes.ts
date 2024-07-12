import { Router, Request, Response } from 'express';

export default (router: Router): void => {
  router.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({ message: 'Server is healthy!' });
  });
}