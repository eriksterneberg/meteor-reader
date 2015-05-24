Tinytest.add('NLP - utils - test stripPunctuation', function (test) {

	// Western punctuation
	test.equal(Nlp.stripPunctuation("Mr."), "Mr");
	test.equal(Nlp.stripPunctuation("eight,"), "eight");
	test.equal(Nlp.stripPunctuation("\'Who?\'"), "Who");
	test.equal(Nlp.stripPunctuation("<<some text>>'"), "some text");

	// Chinese punctuation
	test.equal(Nlp.stripPunctuation("你好！"), "你好");
});
