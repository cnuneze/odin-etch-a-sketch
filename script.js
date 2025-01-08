function init()
{    
    let gridSize = 16;

    const container = document.querySelector('#container');
    
    for (let i = 0; i < gridSize; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        
        container.appendChild(item);
    }
}

init();