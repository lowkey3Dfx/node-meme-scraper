import axios from 'axios';
import cheerio from 'cheerio';
import express from 'express';

const app = express();

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const memesArray = [];

    $('div', html).each(function () {
      const imgSrc = $(this).find('img').attr('src');
      memesArray.push({ imgSrc });
    });
    const memes = memesArray.slice(0, 10);
    console.log(memes);
  })
  .catch((err) => console.log(err));