window.addEventListener('load', () => {
	const tabs = document.querySelectorAll('.tabs__item');
	const contents = document.querySelectorAll('.tabs__content-item');

	for (let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', ( e ) => {
			let tabsChildren = e.target.parentElement.children;
			for (let t = 0; t < tabsChildren.length; t++) {
				tabsChildren[t].classList.remove('tabs__item--active');
			}

			tabs[i].classList.add('tabs__item--active');
			let tabContentChildren = e.target.parentElement.nextElementSibling.children;

			for (let c = 0; c < tabContentChildren.length; c++) {
				tabContentChildren[c].classList.remove('tabs__content-item--active');
			}

			contents[i].classList.add('tabs__content-item--active');
		});
	}
});