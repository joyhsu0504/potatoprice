var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
	    var replacedText = text;
	    if (text.substring(0, 1) == "$") {
		var number = Number(text.replace(/[^0-9\.]+/g,""));
		number = (number/0.72).toFixed(2);
		replacedText = number + " potatoes";
	    }

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}