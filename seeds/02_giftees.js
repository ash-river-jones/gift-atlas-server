/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('giftees').del()
  await knex('giftees').insert([
    {
      giftee_id: '09484d50-a7f8-4048-9bc5-a41deefac6ca',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      name: 'Amanda Chelsea',
      relationship: 'Partner',
      birthday: 'February 15',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'achelseamiller@hotmail.com',
      phone: '+1 (123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "Yes"
    },
    {
      giftee_id: '4884df10-b8e5-40c3-ad97-9db1d7c20d6b',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      name: 'Cedar Miller',
      relationship: 'Pupper',
      birthday: 'June 3',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'cedar@woof.dog',
      phone: '+1 (123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "No"
    },
    {
      giftee_id: 'b7d46b25-7b70-4221-9732-a9279201e39d',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      name: 'Cashew Miller',
      relationship: 'Kitten',
      birthday: 'January 29',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'cashew@meow.cat',
      phone: '+1 (123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "No"
    },
    {
      giftee_id: 'f8eec7ed-e3a4-45dd-bb02-867a18e898fb',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      name: 'Clemintine Miller',
      relationship: 'Kitten',
      birthday: 'January 29',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'clemi@meow.cat',
      phone: '+1 (123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "Yes"
    }
  ]);
};
