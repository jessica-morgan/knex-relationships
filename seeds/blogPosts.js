
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogPosts').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogPosts').insert([
        {id: 1, userId: 99927, title: 'Hello', entry: 'This is my first blog post', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Happy_smiley_face.png'},
        {id: 2, userId: 99901, title: 'Welcome to my blog', entry: 'All things Aardvark', image: ''},
      ]);
    });
};

//make some initial blogposts