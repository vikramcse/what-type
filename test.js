var expect = require('chai').expect;
var what = require('./index.js');

describe('check the returned types of values', function() {
	it('should work!', function() {
		expect(what([])).to.be.equal('array');
		expect(what(123)).to.be.equal('integer');
		expect(what(1.1)).to.be.equal('float');
		expect(what("hello")).to.be.equal('string');
		expect(what(null)).to.be.equal('null');
		expect(what(function() {})).to.be.equal('function');
		expect(what(new RegExp())).to.be.equal('regexp');
		expect(what(true)).to.be.equal('boolean');
		expect(what(new Date())).to.be.equal('date');
	});
});