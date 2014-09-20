'use strict';

// The Package is past automatically as first parameter
module.exports = function(Pdv, app, auth, database) {

  app.get('/pdv/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/pdv/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/pdv/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/pdv/example/render', function(req, res, next) {
    Pdv.render('index', {
      package: 'pdv'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
