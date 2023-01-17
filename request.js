
	const XHR = new XMLHttpRequest();
	XHR.open('POST', '/server.php', true);
	XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	XHR.send('prueba');

	XHR.onload = function() {
		let serverResponse = XHR.response;
		console.log(serverResponse);
	}