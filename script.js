// Your code here.
const items = document.querySelectorAll('.item');

items.forEach(item => {
	item.draggable = true;
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', drop);
});

let dragged = null;

function dragStart(event) {
    dragged= event.target;
    // event.dataTransfer.setData('text/plain', draggedId);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const dropped = event.target;
    
    const tempHTML = dragged.innerHTML;
	const classN = dragged.className;
    dragged.innerHTML = dropped.innerHTML;
	dragged.className = dropped.className;
    dropped.innerHTML = tempHTML;
	dropped.className = classN;
}