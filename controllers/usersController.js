const knex = require('knex')(require('../knexfile'));

exports.getSingleUser = (req, res) => {
	knex.select('user_id','user_name','email').from('users')
		.where({ user_id: req.params.user_id })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).json({ message: `Error retrieving user ${req.params.gift_id}`, error: err });
		});
};