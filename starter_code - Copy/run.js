var exercise = require('./exercise.js');

var url1 = 'http://student.mit.edu/catalog/m1a.html';
var page1 = exercise.first(url1);
page1.then(function(body){
        console.log(body.substring(0,40));
	}, function(error){
        console.log(error);
    });


// call second function
var url2 = 'http://student.mit.edu/catalog/m1b.html';
var page2 = exercise.first(url2);
page2.then(function(body){
        return exercise.second(body);
	})
	.then(function(msg){
        console.log(msg);
	}, function(error){
        console.log(error);
    });


// call third function
var url3 = 'http://student.mit.edu/catalog/m1c.html';
var response = exercise.third(url3);