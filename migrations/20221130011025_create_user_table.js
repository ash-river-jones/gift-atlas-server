/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('users', (table) => {
		table.uuid('user_id').primary().notNullable();
		table.string('user_name').notNullable();
		table.string('email').notNullable();
		table.string('hashed_password').notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('users');
};
