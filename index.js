import * as fs from 'node:fs';
import * as cheerio from 'cheerio';
import downloadImage from './download.js';

const website = new URL('https://memegen-link-examples-upleveled.netlify.app');
const response = await fetch(website);
const main = await response.text();

const $ = cheerio.load(main);
// get src from html
const htmlContent = $(`img`).html(`src`);

// push meme url to Array
const urlArray = [];

for (let i = 0; i <= 9; i++) {
  urlArray.push(htmlContent[i].attribs.src);
}
// create meme folder
const memeFolder = './memes';

fs.access(memeFolder, (error) => {
  if (error) {
    fs.mkdir(memeFolder, (err) => {
      if (err) {
        console.log('We have a little problem.');
      } else {
        console.log('Images saved to new folder.');
      }
    });
  } else {
    console.log('Images saved to existing folder.');
  }
});

// saving image data to new files in memes folder
for (let i = 0; i < urlArray.length; i++) {
  if (i < 9) {
    downloadImage(urlArray[i], `./memes/0${i + 1}.jpg`)
      .then(console.log(`downloaded image 0${i + 1}.jpg`))
      .catch(console.error);
  } else {
    downloadImage(urlArray[i], `./memes/${i + 1}.jpg`)
      .then(console.log(`downloaded image ${i + 1}.jpg`))
      .catch(console.error);
  }
}
