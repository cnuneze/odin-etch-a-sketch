let brightnessIncrease = true;
let brightnessLevel = 9;

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
            let randomColor = getRandomColor();
            let brightness = getBrightness();
            const element = event.target;
            element.style['background-color'] = randomColor;
            element.style['filter'] = `brightness(${brightness})`;            
        })

        item.addEventListener('mouseleave', (event) => {
            const element = event.target;
            element.style['background-color'] = '#fff';
            element.style['filter'] = `brightness(1)`;
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
        let newGridSize = Number.parseInt(prompt('Ingrese tamaño del grid:', 16));

        if (!isValidSize(newGridSize)) {
            console.error('Invalid gridSize value.')
            return 0;
        }

        console.log(newGridSize);
        
        if (newGridSize) {
            destroyGrid();
            drawGrid(newGridSize, true);
        }
    });
}

function isValidSize(size)
{
    if (Number.isNaN(size)) {
        return false;
    }

    const maxGridSize = 100;
    return size <= maxGridSize;
}

function getRandomColor()
{
    const maxRgbValue = 256;
    randomRgbValue = () => Math.floor(Math.random() * maxRgbValue);
    
    let red = randomRgbValue();
    let green = randomRgbValue();
    let blue = randomRgbValue();

    return `rgb(${red}, ${green}, ${blue})`;
}

function getBrightness()
{
    if ((brightnessLevel > 9) || (brightnessLevel < 1)) {
        brightnessIncrease = !brightnessIncrease;
    }
    
    let increase = () => brightnessLevel + 1;
    let decrease = () => brightnessLevel - 1;

    brightnessLevel = brightnessIncrease ? increase() : decrease();


    return brightnessLevel / 10;
}

start();