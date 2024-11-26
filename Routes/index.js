const adminRoutes = require('./admin');
const userRoutes = require('./user');

module.exports = (app) => {
	app.use('/user', userRoutes);
	app.use('/admin', adminRoutes);
};
