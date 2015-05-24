var _stripPunctuation = function(text) {
    return _stripPunctuationSuffix(_stripPunctuationPrefix(text));
};

var _stripPunctuationSuffix = function(text) {
    return text.replace(/[',.;:!\?！。，：；<>]+$/g, '');
};

var _stripPunctuationPrefix = function(text) {
    return text.replace(/^[',.;:!！\?。，：；<>]+/g, '');
};

Nlp = {
	stripPunctuation: _stripPunctuation
}
