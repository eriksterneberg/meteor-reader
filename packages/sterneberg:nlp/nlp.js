var _stripPunctuation = function(text) {
	return text.replace(/(^[,.;:!！\?。，：；]|[,.;:!\?！。，：；]$)/g, '');
};

Nlp = {
	stripPunctuation: _stripPunctuation
}
