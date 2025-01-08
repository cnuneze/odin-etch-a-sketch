function init()
{    
    let gridSize = 16;
    let itemQuantity = gridSize * gridSize;

    const container = document.querySelector('#container');
    
    for (let i = 0; i < itemQuantity; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        
        container.appendChild(item);
    }
}

init();