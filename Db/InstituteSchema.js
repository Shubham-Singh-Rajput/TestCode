const mongoose = require('mongoose');

const InstituteSchema = new mongoose.Schema({
	type: {
		type: String,
		default: 'School',
	},
	name: String,

	board: {
		type: String,
		default: 'CBSE',
	},
	medium: {
		type: String,
		default: 'English',
	},
	classes: String,
});

module.exports = mongoose.model('institute', InstituteSchema);
