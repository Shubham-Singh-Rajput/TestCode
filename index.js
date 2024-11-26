(async () => {
	const express = require('express');
	const routes = require('./Routes');
	const connect = require('./connect');
	const app = express();

	app.use(express.json());

	routes(app);
	await connect();

	app.get('/health-check', (req, res) => {
		res.send('Working');
	});

	app.listen(3000, () => {
		console.log('lisen to post 3000');
	});
})();
