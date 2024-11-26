const InstituteSchema = require('../Db/InstituteSchema');

const adminRoutes = require('express').Router();

adminRoutes.post('/register', async (req, resp) => {
	try {
		const {name, board, type, medium, classes} = req.body;
		const check =
			!type ||
			!['Playhouse', 'School', 'College', 'Competitive Exam Center'].includes(
				type
			) ||
			!board ||
			!name ||
			!medium ||
			!classes;
		if (check)
			return resp.status(400).json({
				error: 'Please send Valid body',
			});

		const data = await InstituteSchema.create({
			name,
			board,
			type,
			medium,
			classes,
		});
		return resp.json(data);
	} catch (error) {
		console.log(error.message);
		return resp.status(500).json({
			error: 'Internal Server Error',
		});
	}
});
// Pre-primary, Primary, Secondary, Higher Secondary).
module.exports = adminRoutes;
