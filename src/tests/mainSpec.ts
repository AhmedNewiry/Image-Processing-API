import supertest from 'supertest';
import app from '../main.js';
import fs from 'fs';
import rimraf from 'rimraf';
import { cwd } from 'process';
import path from 'path';
import resize from '../routes/api/functions/resize.js';

const originalDirectory = path.join(cwd(), 'images');
const availablePicsToResize = fs.readdirSync(originalDirectory);
const modifiedPics = availablePicsToResize.map((pic) => {
  return pic.replace('.jpg', '');
});
const index: number = Math.floor(Math.random() * modifiedPics.length);
const width: number = Math.ceil(Math.random() * 1000);
const height: number = Math.ceil(Math.random() * 1000);
const originalImagePath = path.join(
  cwd(),
  'images',
  `${modifiedPics[index]}.jpg`
);
const endPoint = supertest(app);
const editedImagePath = path.join(
  cwd(),
  'resized',
  `${modifiedPics[index]}-${width}-${height}.jpg`
);
describe('A suite for testing our main endpoint', (): void => {
  it('testing our main end point, and it should pass', (done: DoneFn) => {
    async (): Promise<void> => {
      const response = await endPoint.get('/api');

      expect(response.status).toBe(200);
    };
    done();
  });

  it('testing our api functionality, and it should pass', (done: DoneFn) => {
    async () => {
      const response = await endPoint.get(
        `/api/footage?imagename=${
          modifiedPics[index]
        }&width=${width.toString()}&height=${height.toString()}`
      );
      expect(response.status).toBe(200);
    };
    done();
  });
});

describe('A suite for testing our resize function', (): void => {
  beforeAll((): void => {
    if (!fs.existsSync(path.join(cwd(), 'resized'))) {
      const createResize = async (): Promise<void> => {
        try {
          await fs.promises.mkdir(path.join(cwd(), 'resized'));
        } catch (error) {
          throw Error;
        }
      };
      createResize();
    }
  });

  afterAll((): void => {
    rimraf.sync(path.join(cwd(), 'resized'));
  });

  it('testing the api resize function, and it should pass', async (): Promise<void> => {
    const response: boolean = await resize(
      originalImagePath,
      width,
      height,
      editedImagePath
    );
    expect(response).toBe(true);
  });
});
