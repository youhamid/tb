'use strict';

// The Package is past automatically as first parameter
module.exports = function(Tb, app, auth, database) {

  app.get('/tb/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/tb/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/tb/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/tb/example/render', function(req, res, next) {
    Tb.render('index', {
      package: 'tb'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
