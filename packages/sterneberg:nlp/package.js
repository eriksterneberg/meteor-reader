Package.describe({
    name: 'sterneberg:nlp',
    version: '0.0.1',
    summary: 'General tools used for doing Natural Language Processing',
  // URL to the Git repository containing the source code for this package.
  // git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  // documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    // api.use('client');
    api.addFiles(['nlp.js']);

    if (api.export) {
      api.export('Nlp');
    }
});

Package.onTest(function (api) {
    api.use('sterneberg:nlp');
    api.use(['tinytest', 'test-helpers']);

    api.addFiles('nlp-tests.js');
});
