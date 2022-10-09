import screenshot from 'screenshot-desktop';
import path from 'path';

import { parseImage } from './img-parser';

(async () => {
  const filename = path.join(__dirname, '../test.jpg');

  console.log('Parsing', filename, '...');
  const text = await parseImage(filename);
  console.log('Result', text);

  const buffers = await screenshot.all();
  console.log(buffers);
})();
