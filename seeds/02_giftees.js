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
      email: 'ashjones0515@gmail.com',
      phone: '(123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "Yes"
    },
    {
      giftee_id: '4884df10-b8e5-40c3-ad97-9db1d7c20d6b',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      name: 'Cedar Chelsea',
      relationship: 'Pupper',
      birthday: 'June 3',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'hello@ashjones.dev',
      phone: '(123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "No"
    },
    {
      giftee_id: 'b7d46b25-7b70-4221-9732-a9279201e39d',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      name: 'Cashew Chelsea',
      relationship: 'Kitten',
      birthday: 'January 29',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'ash.river.jones@outlook.com',
      phone: '(123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "No"
    },
    {
      giftee_id: 'f8eec7ed-e3a4-45dd-bb02-867a18e898fb',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      name: 'Clemintine Chelsea',
      relationship: 'Kitten',
      birthday: 'January 29',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'gift.atlas.holiday.gift.tracker@gmail.com',
      phone: '(123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "Yes"
    },
    {
      giftee_id: 'f5999284-446c-44ce-858e-7b73365bcce1',
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076',
      name: 'Ash Jones',
      relationship: 'Partner',
      birthday: 'May 15',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'hello@ashjones.dev',
      phone: '(123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "Yes"
    },
    {
      giftee_id: 'a6cd7a45-395e-405c-abd9-63e2cd7596e2',
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076',
      name: 'Cedar Chelsea',
      relationship: 'Pupper',
      birthday: 'June 3',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'ashjones0515@gmail.com',
      phone: '(123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "No"
    },
    {
      giftee_id: 'bc16077f-5605-4a6c-95f3-cf5661fd861c',
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076',
      name: 'Cashew Chelsea',
      relationship: 'Kitten',
      birthday: 'January 29',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'gift.atlas.holiday.gift.tracker@gmail.com',
      phone: '(123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "No"
    },
    {
      giftee_id: 'eca957ff-cbfa-4e07-acd4-cca845fd78dd',
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076',
      name: 'Clemintine Chelsea',
      relationship: 'Kitten',
      birthday: 'January 29',
      next_holiday: 'Christmas',
      next_holiday_date: 'December 25',
      email: 'ash.river.jones@outlook.com',
      phone: '(123) 456 7890',
      address: '455 Granville Street, Vancouver, BC',
      gift_form_opt_in: "Yes"
    }
  ]);
};
