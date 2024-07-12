import { Express } from 'express';
import path from 'node:path';
import fs from 'node:fs';

export default (app: Express): void => {
  fs.readdirSync(path.join(__dirname, '../routes/')).map(async (file) => {
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(app);
    }
  });
};