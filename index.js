// const express = require('express');
// const cheerio = require('cheerio');
// const axios = require('axios');

// const app = express();

// let url = 'https://memegen-link-examples-upleveled.netlify.app/';

// axios(url)
//   .then((response) => {
//     const html = response.data;
//     const $ = cheerio.load(html);
//     let memesArray = [];

//     $('div', html).each(function () {
//       const imgSrc = $(this).find('img').attr('src');
//       memesArray.push({ imgSrc });
//     });
//     let memes = memesArray.slice(0, 10);
//     console.log(memesArray);
//   })
//   .catch((err) => console.log(err));
