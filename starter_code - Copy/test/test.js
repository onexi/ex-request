var request = require('request');
var fs = require('fs');
require('shelljs/global');
var expect = require('chai').expect;
var ex = require('../exercise.js');

describe('handle async http response with promise', function() {
	it('Get Page', function() {

	    var url1 = 'http://student.mit.edu/catalog/m1a.html';
		var page1 = ex.first(url1);
		page1.then(function(body){
		        expect(body.substring(0,40)).to.equal('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML');
			}, function(error){
		        console.log(error);
		    });

	});
});

describe('handle async write with promise', function() {
	it('Write File', function() {

		var url2 = 'http://student.mit.edu/catalog/m1b.html';
		var page2 = ex.first(url2);
		page2.then(function(body){
		        return ex.second(body);
			})
			.then(function(msg){
				if (fs.existsSync('catalog/data.txt')) expect(true).to.be.true;
		        console.log(msg);
			}, function(error){
		        console.log(error);
		    });



	});
});

describe('Curl using ShellJS', function() {
	it('Get File', function() {
		var url3 = 'http://student.mit.edu/catalog/m1c.html';
		var response = ex.third(url3);
	    if (fs.existsSync('catalog/m1a.html')) expect(true).to.be.true;
	});
});

