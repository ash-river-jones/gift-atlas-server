/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('gifts', (table) => {
		table.uuid('gift_id').primary().notNullable();
		table.uuid('giftee_id')
            .references('giftees.giftee_id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
			.notNullable();
		table.uuid('user_id')
            .references('users.user_id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
			.notNullable();
		table.string('item_name').notNullable();
		table.string('item_description').notNullable().defaultTo('A description for this item has not been provided.');
		table.string('retailer');
		table.string('product_link');
		table.float('price');
		table.string('gift_status').notNullable().defaultTo('Not Purchased');
		table.string('order_number');
		table.string('tracking_number');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('gifts');
};
