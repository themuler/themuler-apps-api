const Repository = require('../database/db');

const appsRepo = new Repository('apps');

exports.getApps = async (req, res, next) => {
	const filter = req.query || {}
	try {
		const apps = await appsRepo.get(filter);
		res.status(200).json({
			success: true,
			data: apps,
			message: 'Apps fetched successfully'
		});
	} catch (error) {
		next(error);
	}
};

exports.saveApp = async (req, res, next) => {
	const newApp = req.body;
	const update = req.query.update
	try {
		const app = await appsRepo.store(newApp, !!update);
		res.status(200).json({
			success: true,
			data: app,
			message: 'App add successfully'
		});
	} catch (error) {
		next(error);
	}
};
