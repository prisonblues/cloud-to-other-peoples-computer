walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "Other People's Computers");
	v = v.replace(/\bThe cloud\b/g, "Other people's computers");
	v = v.replace(/\bthe Cloud\b/g, "Other People's Computers");
	v = v.replace(/\bthe cloud\b/g, "other people's computers");
	
	textNode.nodeValue = v;
}


