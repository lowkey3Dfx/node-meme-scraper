import axios from 'axios';
import cheerio from 'cheerio';
import Fs from 'fs';
import Path from 'path';
import { downloadImage } from './download.js';

const memesUrl = 'https://memegen-link-examples-upleveled.netlify.app';
// axios fetch data from url

axios(memesUrl)
  .then((response) => {
    // extract html
    const html = response.data;
    const $ = cheerio.load(html);
    const memesArray = [];
    // looking inside div and section html to find img and src attributes
    $('div', 'section', html).each(function () {
      // store links inside imgSrc variable and push links inside empty memesArray variable
      const imgSrc = $(this).find('img').attr('src');
      memesArray.push({ imgSrc });
    });
    // store first 10 links inside memes variable
    const memes = memesArray.slice(0, 10);
    const memesOne = memesArray.slice(0);
    // create new array only containing the img src links using map method
    const mapLinks = memes.map((mem) => mem.imgSrc);
    //
    // log each link
    // const eachLink = mapLinks.forEach((link) => console.log(link));
    //
    // for loop though the array to get each link
    for (let i = 0; i < mapLinks.length; i++) {
      console.log(mapLinks[i]);
    }
    // console.log(mapLinks);
  })
  .catch((err) => console.log(err));

downloadImage();
