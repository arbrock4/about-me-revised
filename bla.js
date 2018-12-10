var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {
//alert(this.response);
document.getElementByID("testRetrieval"). = "Test";
}

request.send(null);
