Package.describe({
  summary: "Mediator where you can subscribe to messages"
});

Package.onUse(function (api) {
  var both = ["client", "server"];
  
  api.use('coffeescript', both);
  api.use('deps', 'client');
  
  api.use('underscore', 'client');

  
  api.addFiles("mediator.coffee", both);

  api.export('Mediator');
});