function createSquareGrids() {
	const containerDiv = document.getElementById('grid-container');

	for (let i = 0; i < 256; i++) {
		const div = document.createElement('div');
		div.className = 'gridItems';
		div.setAttribute('draggable', false);
		containerDiv.appendChild(div);
	}

}

function paintTile(element, color) {
	element.style.backgroundColor = color;
}

createSquareGrids();

let isDrawing = false;
let colorPicked = '#000'
const gridItems = document.querySelectorAll('.gridItems');
const btnColorPicker = document.getElementById('btnColorPicker');
const btnClear = document.getElementById('btnClear');

gridItems.forEach((element)=> {
	element.addEventListener('dragstart', (e) => {
  		e.preventDefault()
})	
});

gridItems.forEach((element)=> {
	element.addEventListener('drop', (e) => {
  		e.preventDefault()
})
});

gridItems.forEach((element)=> {
	element.addEventListener('mousedown', function() { 
		isDrawing = true;
	})
});

gridItems.forEach((element)=> {
	element.addEventListener('mousemove', function() { 
		if(isDrawing) {
			paintTile(element, colorPicked);
		}
	})
});

gridItems.forEach((element)=> {
	element.addEventListener('mouseup', function() { 
		paintTile(element, colorPicked);
		isDrawing = false;
	})
});


btnClear.addEventListener('click', function () {
	gridItems.forEach((element) => {
		element.style.backgroundColor = 'white'; 
	})
})


