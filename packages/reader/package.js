Package.describe({
  name: 'reader',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Used to encapsulate business logic for the Meteor Reader app',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('reader.js');

  api.addFiles('publications.js', 'server');

  api.use('session', 'client');

  if (api.export) {
      api.export('Reader');
  };  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('reader');
  api.addFiles('reader-tests.js');
});
