let elem = document.querySelector('#text');

elem.addEventListener('input', function() {
	console.log(this.value);
});