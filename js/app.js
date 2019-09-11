'use strict';

console.log('working');

const allHorns = [];

const testHorn =   {
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  };

// Constructor function
function Horn(horn) {
    
    this.image_url = horn.image_url; 
    this.title = horn.title;
    this.description = horn.description;
    this.keyword = horn.keyword;
    this.horns = horn.horns;

    allHorns.push(this);
};

new Horn(testHorn);
console.log(allHorns);

// AJAX


// Render function