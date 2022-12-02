/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307', 
      user_name: 'Ash Jones',
      email: 'hello@ashjones.dev',
      phone: '+1 (123) 456 7890',
      password: 'testpassword'
    },
    {
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076', 
      user_name: 'Amanda Chelsea',
      email: 'acheslseamiller@hotmail.com',
      phone: '+1 (123) 456 7890',
      password: 'testpassword'
    },
    {
      user_id: 'c6b0370c-37b0-4a15-981b-0982165a5096 ', 
      user_name: 'Cedar Miller',
      email: 'cedar@woof.dog',
      phone: '+1 (123) 456 7890',
      password: 'testpassword'
    }
  ]);
};
