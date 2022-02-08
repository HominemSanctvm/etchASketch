function createSquareGrids() {
	const containerDiv = document.getElementById('grid-container');

	for (let i = 0; i < 256; i++) {
		const div = document.createElement('div');
		div.className = 'gridItems';
		div.setAttribute('draggable', 'false'); 
		containerDiv.appendChild(div);
	}

}
createSquareGrids();
let isDrawing = false;

const gridItems = document.querySelectorAll('.gridItems');

gridItems.forEach((element)=> {
	element.addEventListener('mousedown', function() { 
		isDrawing = true;
	})
});

gridItems.forEach((element)=> {
	element.addEventListener('mousemove', function() { 
		if(isDrawing) {
			paintTile(element);
		}
	})
});

gridItems.forEach((element)=> {
	element.addEventListener('mouseup', function() { 
		paintTile(element);
		isDrawing = false;
	})
});

const btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', function () {
	gridItems.forEach((element) => {
		element.style.backgroundColor = 'white'; 
	})
})

function paintTile(element) {
	element.style.backgroundColor = 'black';
}

const div = document.querySelector('div')
div.addEventListener('dragstart', (e) => {
  e.preventDefault()
})

div.addEventListener('drop', (e) => {
  e.preventDefault()
})
