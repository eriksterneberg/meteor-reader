Tinytest.add('NLP - utils - test stripPunctuation', function (test) {

	// Western punctuation
	test.equal(Nlp.stripPunctuation("Mr."), "Mr");
	test.equal(Nlp.stripPunctuation("eight,"), "eight");

	// Chinese punctuation
	test.equal(Nlp.stripPunctuation("你好！"), "你好");
});
