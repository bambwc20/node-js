$.get('url', function(response) {
	parseValue(response, function(id) {
		auth(id, function(result) {
			display(result, function(text) {
				console.log(text);
			});
		});
	});
});


$.get('url', function(response) {
    parseValue(response, parseValueDone(id));
});
function parseValueDone(id) {
    auth(id, authDone(result));
};
function authDone(result) {
    display(result, displayDone(text));
};
function displayDone(text) {
    console.log(text);
};