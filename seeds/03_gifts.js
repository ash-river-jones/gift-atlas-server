/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('gifts').del()
  await knex('gifts').insert([
    {
      gift_id: 'f53633a9-58ef-423d-8991-b210ca75fe4a',
      giftee_id: '09484d50-a7f8-4048-9bc5-a41deefac6ca',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      item_name: 'Polaroid Camera',
      item_description: 'Capture, print, and display fun moments instantly with the FUJIFILM INSTAX MiniTM 11 Lilac Purple Instant Camera Gift Set!',
      retailer: 'Indigo',
      product_link: 'https://www.chapters.indigo.ca/en-ca/electronics/instax-mini-11-instant-camera/074101949339-item.html?ikwid=polaroid&ikwsec=Home&ikwidx=0#algoliaQueryId=ad9e03ddac43804868708fb209e85247',
      price: 129.99,
      gift_status: 'Ordered/Purchasde',
      order_number: 'OR-12345',
      tracking_number: '1Z00F842DK41903342'
    },
    {
      gift_id: 'ebb5eefd-972d-4e0a-930f-84583e033729',
      giftee_id: '09484d50-a7f8-4048-9bc5-a41deefac6ca',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      item_name: 'Weighted Blanket',
      item_description: 'The cool cotton Baloo blanket - now in a larger size that looks like a traditional comforter.',
      retailer: 'Indigo',
      product_link: 'https://www.chapters.indigo.ca/en-ca/house-and-home/weighted-comforter-queen-15-lbs/850002843309-item.html?ikwid=weighted+duvet&ikwsec=Home&ikwidx=0#algoliaQueryId=d1e39d45f94d7634760df009005e371b',
      price: 359.00,
      gift_status: 'Not Purchased',
      order_number: 'ID-67890',
      tracking_number: 'EPG0109590469832085'
    },
    {
      gift_id: '765e3289-2c34-400c-aec3-2de2266bb64a',
      giftee_id: '09484d50-a7f8-4048-9bc5-a41deefac6ca',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      item_name: "We're Not Really Strangers Card Game",
      item_description: "We're Not Really Strangers is a purpose driven card game and movement all about empowering meaningful connections.",
      retailer: 'WNRS',
      product_link: 'https://www.werenotreallystrangers.com/collections/shop-all/products/not-really-strangers-card-deck',
      price: 25.00,
      gift_status: 'Not Purchased',
      order_number: 'W971252',
      tracking_number: 'EPG010851355084185'
    }
  ]);
};