
var Person = function Person(firstnameValue, lastnameValue) {
	var firstName;
	var lastName;

	Object.defineProperty(this, 'firstName', {
		get: function() {
			return firstName;
		},
		set: function(value) {
			firstName = value;
		}
	});

	Object.defineProperty(this, 'lastName', {
		get: function() {
			return lastName;
		},
		set: function(value) {
			lastName = value;
		}
	});

	Object.defineProperty(this, 'name', {
		get: function() {
			return firstName + ' ' + lastName;
		},
		set: function(value) {
			firstName = value.split(' ')[0];
			lastName = value.split(' ')[1] || '';
		}.bind(this)
	});

	this.name = firstnameValue + ' ' + lastnameValue;
};


module.exports = {
	Person: Person
};
