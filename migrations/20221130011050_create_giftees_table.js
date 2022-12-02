/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('giftees', (table) => {
		table.uuid('giftee_id').primary().notNullable();
		table.uuid('user_id').references('users.user_id').onUpdate('CASCADE').onDelete('CASCADE').notNullable();
		table.string('name').notNullable();
		table.string('relationship').notNullable().defaultTo('friend');
		table.string('birthday').notNullable();
		table.string('next_holiday').notNullable();
		table.string('next_holiday_date').notNullable();
		table.string('email');
		table.string('phone');
		table.string('address');
		table.string('gift_form_opt_in').notNullable().defaultTo("No");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('giftees');
};
