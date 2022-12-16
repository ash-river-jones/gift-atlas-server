const knex = require('knex')(require('../knexfile'));

exports.getAllGiftees = (req, res) => {
	knex('giftees')
		.where({ user_id: req.user.user_id })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).json({ message: `There was an error getting giftee data`, error: err });
		});
};

exports.postGiftee = (req, res) => {
	if (
		!req.body.giftee_id ||
		!req.body.user_id ||
		!req.body.name ||
		!req.body.relationship ||
		!req.body.birthday ||
		!req.body.next_holiday ||
		!req.body.next_holiday_date ||
		!req.body.gift_form_opt_in
	) {
		res.status(400).json({
			message: `Error: Invalid/Incomplete Request`
		});
	} else {
		knex('giftees')
			.insert(req.body)
			.then(() => {
				res.status(201).json({message: `A new giftee has been created.`});
			})
			.catch((err) => {
				res.status(400).json({
					message: `Error adding Giftee`,
                    error: err
				});
			});
	}
};

exports.getSingleGiftee = (req, res) => {
	knex('giftees')
		.where({ giftee_id: req.params.giftee_id, user_id: req.user.user_id})
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).json({ message: `Error retrieving giftee ${req.params.giftee_id}`, error: err });
		});
};

exports.putGiftee = (req, res) => {
	if (!req.params.giftee_id) {
		res.status(400).json({
			message: `Error: Invalid/Incomplete request`,
		});
	} else {
		knex('giftees')
			.where({ giftee_id: req.params.giftee_id })
			.update(req.body)
			.then((data) => {
				res.status(200).json({message: `Giftee with ID ${req.params.giftee_id} has been updated.`});
			})
			.catch(() => {
				res.status(400).json({ message: `Error editing giftee ${req.params.giftee_id}`, error: err });
			});
	}
};

exports.deleteGiftee = (req, res) => {
	knex('giftees')
		.where({giftee_id: req.params.giftee_id})
		.delete()
		.then(() => {
			res.status(200).json({message: `Giftee with id ${req.params.giftee_id} has been deleted successfully`});
		})
		.catch((err) => {
			res.status(400).json({
				message: `There was an error deleting giftee ${req.params.giftee_id}`,
				error: err,
			});
		});
};

exports.getGiftsForGiftee = (req, res) => {
	knex('gifts')
		.where({ giftee_id: req.params.giftee_id, user_id: req.user.user_id})
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).json({
				message: `Error retrieving gifts for giftee ${req.params.giftee_id}`,
				error: err,
			});
		});
};

exports.getPurchasedGiftsForGiftee = (req, res) => {
	knex('gifts')
		.where({ giftee_id: req.params.giftee_id, gift_status: "Ordered/Purchased", user_id: req.user.user_id})
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).json({
				message: `Error retrieving gifts for giftee ${req.params.giftee_id}`,
				error: err,
			});
		});
};