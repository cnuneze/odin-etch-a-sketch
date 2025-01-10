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

    applyHoverTrailEffect();
}

function applyHoverTrailEffect() {
    const grid = document.querySelectorAll('.grid-item');
    grid.forEach(item => {
        item.addEventListener('mouseenter', (event) => {
            const element = event.target;
            element.style['background-color'] = 'blue';
        })

        item.addEventListener('mouseleave', (event) => {
            const element = event.target;
            element.style['background-color'] = '#fff';
        })
    });
}

init();