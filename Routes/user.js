const InstituteSchema = require('../Db/InstituteSchema');
const userModal = require('../Db/userModal');

const userRoutes = require('express').Router();

userRoutes.get('/school', async (req, resp) => {
	try {
		const schoolData = await InstituteSchema.find({}).select('name');
		return resp.json({
			schoolList: schoolData,
		});
	} catch (error) {
		console.log(error.message);
		return resp.status(500).json({
			error: 'Internal Server Error',
		});
	}
});

userRoutes.get('/school/board', async (req, resp) => {
	const {board} = req.query;
	if (!board) {
		return resp.status(400).json({
			error: 'Please end the valid params',
		});
	}
	try {
		const schoolData = await InstituteSchema.find({board}).select('name');
		return resp.json({
			schoolList: schoolData,
		});
	} catch (error) {
		console.log(error.message);
		return resp.status(500).json({
			error: 'Internal Server Error',
		});
	}
});

userRoutes.get('/school/medium', async (req, resp) => {
	const {board, medium} = req.query;
	if (!board || !medium) {
		return resp.status(400).json({
			error: 'Please end the valid params',
		});
	}
	try {
		const schoolData = await InstituteSchema.find({board, medium}).select(
			'name'
		);
		return resp.json({
			schoolList: schoolData,
		});
	} catch (error) {
		console.log(error.message);
		return resp.status(500).json({
			error: 'Internal Server Error',
		});
	}
});
userRoutes.get('/school/category', async (req, resp) => {
	const {board, medium, category} = req.query;
	if (!board || !medium || !category) {
		return resp.status(400).json({
			error: 'Please end the valid params',
		});
	}
	try {
		const schoolData = await InstituteSchema.find({
			board,
			medium,
			category,
		}).select('name');
		return resp.json({
			schoolList: schoolData,
		});
	} catch (error) {
		console.log(error.message);
		return resp.status(500).json({
			error: 'Internal Server Error',
		});
	}
});
userRoutes.post('/register', async (req, resp) => {
	const {classId, name, subjects} = req.body;
	if (!classId || !name || !subjects || subjects.length == 0) {
		return resp.json({error: 'Please send valid data'});
	}
	const checkSchool = await InstituteSchema.findById(classId);
	if (!checkSchool) return resp.json({error: 'Please Send a Valid Id'});

	const data = await userModal.create({classId, name, subjects});
	return resp.json({
		user: data,
	});
});
userRoutes.get('/details', async (req, resp) => {
	const {userId} = req.query;
	if (!userId) {
		return resp.json({error: 'Please send valid data'});
	}
	const data = await userModal.findById(userId).populate('classId').exec();
	return resp.json({
		user: data,
	});
});
module.exports = userRoutes;
