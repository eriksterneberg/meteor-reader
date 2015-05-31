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
