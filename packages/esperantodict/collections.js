EsperantoEnglishDict = new Mongo.Collection('eo-en-translations');

if (Meteor.isServer) {

	if (EsperantoEnglishDict.find().count() == 0) {
		console.log('Loading fixtures for Esperanto-English dictionary...');

		var fixtures = JSON.parse(Assets.getText("fixtures.json"));
		_.each(fixtures, function (value, key, obj){
			EsperantoEnglishDict.insert({
				key: key,
				t: value
			});				
		});

		console.log('Loaded ' + EsperantoEnglishDict.find().count() + ' objects.');
	}

	Meteor.publish('eo-en-translations', function(word) {
		return EsperantoEnglishDict.find({key: word});
		// return EsperantoEnglishDict.find();		
	});
}

// if (Meteor.isClient) {
// 	Meteor.subscribe('eo-en-translations', Session.get('focusWord'));
// };
