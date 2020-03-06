'use strict'

console.log('Salut jQuery !')
console.log($('#first').html())
console.log($('.info').length+" - info class elements")


console.log($('img').length+' -total images')

console.log($('#first img').length+' total images in div id first')

console.log($( "img[src*='gallery']" ).length+' images whose source has a path that contains the word "gallery"')



// (6) Declare a jQ variable named firstDiv that contains the id element "first"

let firstDiv = $('#first')


// (7) Display in the console the number of images of this element #first and whose source contains the substring "gallery"

console.log(firstDiv.find(' img[src*=\'gallery\']').length+' number of images of this element #first and whose source contains the substring "gallery"')

// (8) Declare a firstDivById variable that contains the "first" id DOM element (the same as above), use document.getElementById
let firstDivById = document.getElementById('first')

// (9) "jQuerisez" this variable firstDivById (DOM element), ie pass it in the function $ (), and display the number of direct children of type p it contains

console.log($(firstDivById).find('> p').length+' number of direct children of type p it contains')