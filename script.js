function start()
{
    let gridInitialSize = 16;
    startEvents();
    drawGrid(gridInitialSize);
}

function applyHoverTrailEffect()
{
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

function drawGrid(size)
{
    gridItemDimension = getItemDimension(size) + 'px';
    let itemQuantity = size * size;

    const container = document.querySelector('#container');
    
    for (let i = 0; i < itemQuantity; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.style['min-width'] = gridItemDimension;
        item.style['min-height'] = gridItemDimension;
        
        container.appendChild(item);
    }

    applyHoverTrailEffect();
}

function getItemDimension(size)
{
    const gridDimensionsPx = 1200;
    return gridDimensionsPx / size;
}

function destroyGrid()
{
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => 
    {
        item.parentNode.removeChild(item);
    });
}

function startEvents()
{
    const gridSizeButton = document.querySelector('#btn_gridSize');

    gridSizeButton.addEventListener('click', (event) =>
    {
        let newGridSize = prompt('Ingrese tamaño del grid:', 16);

        console.log(newGridSize);
        
        if (newGridSize) {
            destroyGrid();
            drawGrid(newGridSize, true);
        }
    });
}

start();