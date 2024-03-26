const calc = document.querySelector('.calc');
const result = document.querySelector('.calc-screen p');

calc.addEventListener('click', function (e) {
	if (!e.target.classList.contains('btn')) return;

	let value = e.target.innerText;



	switch (value) {
		case 'AC':
			result.innerText = '';
			break;

		case '=':
			result.innerText = eval(result.innerText);
			break;

		default:
			result.innerText += value;
	}
	console.log(value);

});






