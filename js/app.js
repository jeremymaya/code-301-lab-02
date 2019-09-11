'use strict';

console.log('working');

const allHorns = [];
const keywords = [];

// const testHorn =   {
//     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//     "title": "UniWhal",
//     "description": "A unicorn and a narwhal nuzzling their horns",
//     "keyword": "narwhal",
//     "horns": 1
//   };

// Constructor function

function Horn(horn) {
    
    this.image_url = horn.image_url; 
    this.title = horn.title;
    this.description = horn.description;
    this.keyword = horn.keyword;
    this.horns = horn.horns;

    allHorns.push(this);
};


// AJAX

$.get('/data/page-1.json', data => {

    data.forEach(horn => {
        let tempHorn = new Horn(horn);
        tempHorn.render();
        
        // console.log(tempHorn);
    });
    getKeywords(allHorns);
    fillSelect();
    // console.log(allHorns);
});


// Render function
// Add keyword as option

Horn.prototype.render = function() {
    
    const myTemplate = $('#photo-template').html();
    const $newSection = $('<section></section>');
    $newSection.html(myTemplate);
    
    $newSection.attr('data-keyword', this.keyword);
    $newSection.find('h2').text(this.title);
    $newSection.find('img').attr('src', this.image_url);
    $newSection.find('p').text(this.description);
    
    // console.log($newSection);
    $('main').append($newSection);
};

function fillSelect() {

    keywords.forEach(keyword => {
        const $newOption = $('<option></option>');
        $newOption.text(keyword);
        $newOption.attr('value', keyword);
        $('select').append($newOption);
    })
}

// Generating Select element from allHorn

const getKeywords = (arr) => {
    arr.forEach(horn => {
        if(!keywords.includes(horn.keyword)){
            keywords.push(horn.keyword);
        }
    })
    console.log(keywords);
}               


// Add event listener to the select list to filter images



// Able to filter out a specific selection.
// Still need to complete Feature #2
$('select').change( function() {
    let selected = $('select').val();
    console.log(selected);
    if(selected === 'default') {
        console.log('default selected');
    }
    else {
        $('section').css("visibility", "hidden");
        $('section[data-keyword="narwhal"]').css("visibility", "visible");
    }
})

// Show/Hide images depending on the selected keyword
