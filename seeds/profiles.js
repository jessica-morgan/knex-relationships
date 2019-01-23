
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 99901, url: 'https://en.wikipedia.org/wiki/Aardvark', profile_image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Porc_formiguer.JPG'},
        {id: 2, user_id: 99902, url: 'https://en.wikipedia.org/wiki/Baboon', profile_image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Olive_baboon_Ngorongoro.jpg'},
        {id: 3, user_id: 99903, url: 'https://en.wikipedia.org/wiki/Capybara', profile_image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG'}
      ])
    })
};