window.addEventListener('load', () => {
	let copy = document.querySelectorAll('.js-copy');

	if (copy && copy.length > 0) {
		copy.forEach(function (elem) {
			elem.addEventListener('click', function () {
				let text = elem.querySelector('span');
				let selection = window.getSelection();
				let range = document.createRange();

				range.selectNodeContents(text);
				selection.removeAllRanges();
				selection.addRange(range);
				document.execCommand('copy');
			});
		});
	}
});