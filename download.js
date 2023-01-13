import axios from 'axios';
import Fs from 'fs';
import Path from 'path';
import { fileURLToPath } from 'url';

// fix __dirname is not defined in ES module scope error
const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);

export async function downloadImage() {
  const url =
    'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300';
  const path = Path.resolve(__dirname, 'memes', '01.jpg');
  const writer = Fs.createWriteStream(path);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

downloadImage();
