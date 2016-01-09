//Thanks to perfectionkills.com <http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/>
__getClass = function(val) {
	return Object.prototype.toString.call(val)
		.match(/^\[object\s(.*)\]$/)[1];
};

module.exports = function(val) {
	if (val === undefined)
		return 'undefined';

	if (val === null)
		return 'null';

	var type = typeof val;

	if (type === 'object') {
		type = __getClass(val).toLowerCase();
	}

	if(type === 'number') {
		if(val.toString().indexOf('.') > 0)
			return 'float';
		else
			return 'integer';
	}
	
	return type;
};