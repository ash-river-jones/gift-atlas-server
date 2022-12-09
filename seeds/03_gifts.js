/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('gifts').del()
  await knex('gifts').insert([

    // gifts from Ash to Amanda 3
    {
      gift_id: 'f53633a9-58ef-423d-8991-b210ca75fe4a',
      giftee_id: '09484d50-a7f8-4048-9bc5-a41deefac6ca',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      item_name: 'Polaroid Camera',
      item_description: 'Capture, print, and display fun moments instantly with the FUJIFILM INSTAX MiniTM 11 Lilac Purple Instant Camera Gift Set!',
      retailer: 'Indigo',
      product_link: 'https://www.chapters.indigo.ca/en-ca/electronics/instax-mini-11-instant-camera/074101949339-item.html?ikwid=polaroid&ikwsec=Home&ikwidx=0#algoliaQueryId=ad9e03ddac43804868708fb209e85247',
      price: 129.99,
      gift_status: 'Ordered/Purchased',
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
    },
    //gifts from Ash to Cedar 2
    {
      gift_id: '7498672f-d7a5-41a7-8bb5-5ad4a72f8ac2',
      giftee_id: 'b7d46b25-7b70-4221-9732-a9279201e39d',
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
      gift_id: '849c15d5-1baa-4624-809e-2b59ed1a7b35',
      giftee_id: 'b7d46b25-7b70-4221-9732-a9279201e39d',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      item_name: "We're Not Really Strangers Card Game",
      item_description: "We're Not Really Strangers is a purpose driven card game and movement all about empowering meaningful connections.",
      retailer: 'WNRS',
      product_link: 'https://www.werenotreallystrangers.com/collections/shop-all/products/not-really-strangers-card-deck',
      price: 25.00,
      gift_status: 'Not Purchased',
      order_number: 'W971252',
      tracking_number: 'EPG010851355084185'
    },
    //gifts from Ash to Cashew 0
    // gifts from Ash to Clemi 1
    {
      gift_id: 'dd7cc226-73c8-4034-b8a7-3898b77d0a31',
      giftee_id: 'f8eec7ed-e3a4-45dd-bb02-867a18e898fb',
      user_id: 'c2186be8-4195-4745-9627-b4c83d1d6307',
      item_name: "We're Not Really Strangers Card Game",
      item_description: "We're Not Really Strangers is a purpose driven card game and movement all about empowering meaningful connections.",
      retailer: 'WNRS',
      product_link: 'https://www.werenotreallystrangers.com/collections/shop-all/products/not-really-strangers-card-deck',
      price: 25.00,
      gift_status: 'Not Purchased',
      order_number: 'W971252',
      tracking_number: 'EPG010851355084185'
    },
    // gifts from Amanda to Ash 3
    {
      gift_id: 'ee952e87-6b75-4ce4-ae4f-29d118143e9f',
      giftee_id: 'f5999284-446c-44ce-858e-7b73365bcce1',
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076',
      item_name: 'Polaroid Camera',
      item_description: 'Capture, print, and display fun moments instantly with the FUJIFILM INSTAX MiniTM 11 Lilac Purple Instant Camera Gift Set!',
      retailer: 'Indigo',
      product_link: 'https://www.chapters.indigo.ca/en-ca/electronics/instax-mini-11-instant-camera/074101949339-item.html?ikwid=polaroid&ikwsec=Home&ikwidx=0#algoliaQueryId=ad9e03ddac43804868708fb209e85247',
      price: 129.99,
      gift_status: 'Ordered/Purchased',
      order_number: 'OR-12345',
      tracking_number: '1Z00F842DK41903342'
    },
    {
      gift_id: '4f2939bd-dd60-44a3-985b-64bfd132a5ad',
      giftee_id: 'f5999284-446c-44ce-858e-7b73365bcce1',
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076',
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
      gift_id: '5f37a373-081f-41dd-8ab2-0c68b2cb0bc4',
      giftee_id: 'f5999284-446c-44ce-858e-7b73365bcce1',
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076',
      item_name: "We're Not Really Strangers Card Game",
      item_description: "We're Not Really Strangers is a purpose driven card game and movement all about empowering meaningful connections.",
      retailer: 'WNRS',
      product_link: 'https://www.werenotreallystrangers.com/collections/shop-all/products/not-really-strangers-card-deck',
      price: 25.00,
      gift_status: 'Not Purchased',
      order_number: 'W971252',
      tracking_number: 'EPG010851355084185'
    },
// gifts from Amanda to Cedar 1
    {
      gift_id: 'd389f80b-5b21-4aca-9269-d845a69f5c19',
      giftee_id: 'a6cd7a45-395e-405c-abd9-63e2cd7596e2',
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076',
      item_name: 'Polaroid Camera',
      item_description: 'Capture, print, and display fun moments instantly with the FUJIFILM INSTAX MiniTM 11 Lilac Purple Instant Camera Gift Set!',
      retailer: 'Indigo',
      product_link: 'https://www.chapters.indigo.ca/en-ca/electronics/instax-mini-11-instant-camera/074101949339-item.html?ikwid=polaroid&ikwsec=Home&ikwidx=0#algoliaQueryId=ad9e03ddac43804868708fb209e85247',
      price: 129.99,
      gift_status: 'Ordered/Purchased',
      order_number: 'OR-12345',
      tracking_number: '1Z00F842DK41903342'
    },
    // gifts from Amanda to Cashew 2
    {
      gift_id: 'c0d7cfef-c347-4ea4-b4c4-65875affff14',
      giftee_id: 'bc16077f-5605-4a6c-95f3-cf5661fd861c',
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076',
      item_name: 'Polaroid Camera',
      item_description: 'Capture, print, and display fun moments instantly with the FUJIFILM INSTAX MiniTM 11 Lilac Purple Instant Camera Gift Set!',
      retailer: 'Indigo',
      product_link: 'https://www.chapters.indigo.ca/en-ca/electronics/instax-mini-11-instant-camera/074101949339-item.html?ikwid=polaroid&ikwsec=Home&ikwidx=0#algoliaQueryId=ad9e03ddac43804868708fb209e85247',
      price: 129.99,
      gift_status: 'Ordered/Purchased',
      order_number: 'OR-12345',
      tracking_number: '1Z00F842DK41903342'
    },{
      gift_id: '487cdbe6-8a83-4818-86ff-d99996d291c1',
      giftee_id: 'bc16077f-5605-4a6c-95f3-cf5661fd861c',
      user_id: '03667d58-1455-495e-ba9f-f7b3c6fb8076',
      item_name: 'Polaroid Camera',
      item_description: 'Capture, print, and display fun moments instantly with the FUJIFILM INSTAX MiniTM 11 Lilac Purple Instant Camera Gift Set!',
      retailer: 'Indigo',
      product_link: 'https://www.chapters.indigo.ca/en-ca/electronics/instax-mini-11-instant-camera/074101949339-item.html?ikwid=polaroid&ikwsec=Home&ikwidx=0#algoliaQueryId=ad9e03ddac43804868708fb209e85247',
      price: 129.99,
      gift_status: 'Ordered/Purchased',
      order_number: 'OR-12345',
      tracking_number: '1Z00F842DK41903342'
    } 
    // gifts from Amanda to Clemi 0
  ]);
};