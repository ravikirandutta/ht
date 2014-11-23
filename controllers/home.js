/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.food = function(req, res) {
  res.render('food', {
    title: 'Food'
  });
};
