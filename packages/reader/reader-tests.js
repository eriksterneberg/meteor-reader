Tinytest.add('reader - utils - convert to document', function (test) {
	var text = 'Mia nomo estas Eriko.\nMi estas programisto.';

	var expectedDocument = {
	    text: [['Mia', 'nomo', 'estas', 'Eriko.'], ['Mi', 'estas', 'programisto.']]
	};

	test.equal(Reader.textToDocument(text), expectedDocument);
});
