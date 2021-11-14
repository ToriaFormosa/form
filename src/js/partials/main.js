window.addEventListener('load', () => {
	const rangeInputs = document.querySelectorAll('input[type="range"]');

	rangeInputs.forEach(input => {
		input.addEventListener('input', function(e) {
			let target = e.target;
			const min = target.min;
			const max = target.max;
			const val = target.value;

			if (e.target.type !== 'range') {
				target = document.getElementById('range')
			}

			target.style.display = 'block';
			target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
			input.nextElementSibling.querySelector('.js-range-value').textContent = val;
		});
	});
});