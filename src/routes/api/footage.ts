import express from 'express';
import fs from 'fs';
import path from 'path';
import { cwd } from 'process';
import { Request, Response } from 'express';
import resize from './functions/resize.js';

const footage = express.Router();
footage.get('/', (req: Request, res: Response): void => {
  const originalDirectory = path.join(cwd(), 'images');
  const enteredImgName = `${req.query.imagename}.jpg`;
  const editedImageDir = path.join(cwd(), 'resized');

  const width: unknown = parseInt(req.query.width as string);
  const height: unknown = parseInt(req.query.height as string);

  if (!fs.readdirSync(originalDirectory).includes(enteredImgName)) {
    throw `No such file or directory, please check the image name entered.`;
  } else if (isNaN(height as number) || isNaN(width as number)) {
    throw 'invalid width and/or height value, please check that these values are numbers';
  } else {
    const createDir = async (): Promise<unknown> => {
      if (!fs.existsSync(editedImagePath)) {
        try {
          return await fs.promises.mkdir(path.join(cwd(), 'resized'));
        } catch (error) {
          return error;
        }
      }
    };

    createDir();
  }

  const savedImageName = `${req.query.imagename}-${req.query.width}-${req.query.height}.jpg`;
  const editedImagePath = path.join(editedImageDir, savedImageName);
  const originalImagePath = path.join(
    cwd(),
    'images',
    `${req.query.imagename}.jpg`
  );

  if (fs.readdirSync(editedImageDir).includes(savedImageName)) {
    res.sendFile(editedImagePath);
  } else {
    const fireResize = async (): Promise<void> => {
      try {
        await resize(originalImagePath, width, height, editedImagePath);

        res.sendFile(editedImagePath);
      } catch (error) {
        res.status(500);
      }
    };
    fireResize();
  }
});


export default footage;
