// Detect click in corner

function determineCorner(e) {
	var bounds = e.target.getBoundingClientRect();
	var bottom = bounds.bottom;
	var right = bounds.right;
  var left = bounds.left;
  var top = bounds.top;
	var cornerBoxSize = 20;

	var clickPos = {
		x: e.clientX,
		y: e.clientY,
	}

	if ((clickPos.x > right - cornerBoxSize) && (clickPos.y > bottom - cornerBoxSize) ) {
		console.log('Bottom Right corner clicked');
	}

  if ((clickPos.x > right - cornerBoxSize) && (clickPos.y < top + cornerBoxSize) ) {
		console.log('Top Right corner clicked');
	}

  if ((clickPos.x < left + cornerBoxSize) && (clickPos.y < top + cornerBoxSize) ) {
		console.log('Top Left corner clicked');
	}

  if ((clickPos.x < left + cornerBoxSize) && (clickPos.y > bottom - cornerBoxSize) ) {
		console.log('Bottom Left corner clicked');
	}

}