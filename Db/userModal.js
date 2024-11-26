const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		classId: {type: mongoose.Schema.Types.ObjectId, ref: 'institute'},

		name: String,
		subjects: {
			type: Array,
			default: [],
		},
	},
	{
		strictPopulate: false,
	}
);

module.exports = mongoose.model('user', userSchema);
