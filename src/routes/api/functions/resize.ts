import sharp from 'sharp';

const resize = async (
  originalImagePath: string,
  width: unknown,
  height: unknown,
  editedImagePath: string
) => {
  try {
    const image: sharp.Sharp = sharp(originalImagePath).resize(
      width as number,
      height as number
    );
    await image.toFile(editedImagePath);
    return true;
  } catch (error) {
    throw Error;
  }
};

export default resize;
