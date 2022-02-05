function createSquareGrids() {
	const containerDiv = document.getElementById('container');

	for (let i = 0; i < 256; i++) {
		const div = document.createElement('div');
		div.className = 'gridItems';
		containerDiv.appendChild(div);
	}

}
createSquareGrids();

const gridItems = document.querySelectorAll('.gridItems');
gridItems.forEach((element)=> {
	element.addEventListener('click', function() {
			element.style.backgroundColor = 'black';
	});
});

const btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', function () {
	gridItems.forEach((element) => {
		element.style.backgroundColor = 'white'; 
	})
})
