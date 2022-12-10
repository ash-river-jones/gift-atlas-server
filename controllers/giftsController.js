const knex = require('knex')(require('../knexfile'));


exports.postGift = (req, res) => {
	// console.log(req.body)
	if (
		!req.body.gift_id ||
        !req.body.giftee_id ||
		!req.body.user_id ||
		!req.body.item_name
	) {
		res.status(400).json({
			message: `Error: Invalid/Incomplete Request`
		});
	} else {
		knex('gifts')
			.insert(req.body)
			.then(() => {
				res.status(201).json({message: `A new gift has been created for giftee with ID ${req.body.giftee_id}`});
			})
			.catch((err) => {
				res.status(400).json({
					message: `Error adding gift`,
                    error: err
				});
			});
	}
};

exports.getSingleGift = (req, res) => {
	knex('gifts')
		.where({ gift_id: req.params.gift_id, user_id: req.user.user_id })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).json({ message: `Error retrieving gift ${req.params.gift_id}`, error: err });
		});
};

exports.putGift = (req, res) => {
	if (!req.params.gift_id) {
		res.status(400).json({
			message: `Error: Invalid/Incomplete request`,
		});
	} else {
		knex('gifts')
			.where({ gift_id: req.params.gift_id })
			.update(req.body)
			.then(() => {
				res.status(200).json({ message: `Gift with ID ${req.params.gift_id} has been updated` });
			})
			.catch(() => {
				res.status(400).json({ message: `Error editing gift ${req.params.gift_id}`, error: err });
			});
	}
};

exports.deleteGift = (req, res) => {
	knex('gifts')
		.where('gift_id', req.params.gift_id)
		.delete()
		.then(() => {
			res.status(200).json({message: `Gift with id ${req.params.gift_id} has been deleted successfully`});
		})
		.catch((err) => {
			res.status(400).json({
				message: `There was an error deleting gift ${req.params.gift_id}`,
				error: err,
			});
		});
};