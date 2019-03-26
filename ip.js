/* Verify DOM is fully loaded in */
document.addEventListener('DOMContentLoaded', function() {
    /* The URL that will return JSON information, regarding the given user's IP */
    var getIpFrom = 'https://ipinfo.io/json';

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
	if (request.readyState === 4) {
	    /* Parse the received JSON data */
	    var parsedRequest = JSON.parse(this.response);
	    document.getElementById("IP").innerHTML = parsedRequest.ip;
	    document.getElementById("Country").innerHTML = parsedRequest.country;
	    document.getElementById("City").innerHTML = parsedRequest.city;
	    document.getElementById("Region").innerHTML = parsedRequest.region;
	}
    }
    request.open('GET', getIpFrom, true);
    request.send();
});
