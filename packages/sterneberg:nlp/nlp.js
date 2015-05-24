var STRIP_PUNCTUATION_BASE_REGEX = "[',.;:!\?！。，：；<>]+",
    STRIP_SUFFIX_REGEX = new RegExp(STRIP_PUNCTUATION_BASE_REGEX + '$', 'g'),
    STRIP_PREFIX_REGEX = new RegExp('^' + STRIP_PUNCTUATION_BASE_REGEX, 'g');

var _stripPunctuation = function(text) {
    return _stripPunctuationSuffix(_stripPunctuationPrefix(text));
};

var _stripPunctuationSuffix = function(text) {
    return text.replace(STRIP_SUFFIX_REGEX, '');
};

var _stripPunctuationPrefix = function(text) {
    return text.replace(STRIP_PREFIX_REGEX, '');
};

Nlp = {
	stripPunctuation: _stripPunctuation
}
