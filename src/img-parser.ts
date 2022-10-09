import tesseract from 'node-tesseract-ocr';
import path from 'path';

const config = {
  lang: 'eng',
  oem: 1,
  psm: 3,
};

export const parseImage = async (img: string | Buffer = path.join(__dirname, '../test.jpg')) => {
  try {
    const parsedText = await tesseract.recognize(img, config);
    return parsedText;
  } catch (e) {
    console.error(e);
    return '';
  }
};
