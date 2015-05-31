Package.describe({
  name: 'eriksterneberg:esperantodict',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('mongo');
  api.use('underscore', 'server');
  api.use('session', 'client');

  api.versionsFrom('1.1.0.2');
  api.addFiles(['publications.js', 'fixtures.json'], ['server']);
  api.addFiles(['collections.js']);
  api.addFiles('fixtures.js', 'server');

  if (api.export) {
      api.export('EsperantoEnglishDict');
  };
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('eriksterneberg:esperantodict');
  api.addFiles('esperantodict-tests.js');
});
