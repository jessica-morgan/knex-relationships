
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 99901, url: 'https://en.wikipedia.org/wiki/Aardvark', profile_image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Porc_formiguer.JPG'},
        {id: 2, user_id: 99902, url: 'https://en.wikipedia.org/wiki/Baboon', profile_image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Olive_baboon_Ngorongoro.jpg'},
        {id: 3, user_id: 99903, url: 'https://en.wikipedia.org/wiki/Capybara', profile_image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG'},
        {id: 27, user_id: 99927, url: 'http://www.ilovenature.world/i-love-nature-news/2018/8/11/400-year-old-shark-found-in-the-arctic-may-be-the-oldest-living-vertebrate-alive', profile_image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Somniosus_microcephalus_okeanos.jpg'}
      ])
    })
};