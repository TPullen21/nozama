Template.registerHelper('truncateText', function(text, length) {
	var truncatedText = text;

	if (text.length > length) {
		var truncatedText = text.substring(0, length);
		truncatedText = truncatedText.substring(0, Math.min(truncatedText.length, truncatedText.lastIndexOf(" ")));
	}

	return new Spacebars.SafeString(truncatedText);
});