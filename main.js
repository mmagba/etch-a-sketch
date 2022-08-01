let size = 16;
const set = document.querySelector('.set');
const container = document.querySelector('.container');
set.addEventListener('click', () => {
    cleanGrid();
    size = prompt("Enter grid size (maximum 100)");
    while (size < 1 || size > 100) {
        size = prompt("Enter grid size (maximum 100)");
    }
    newGrid(size);
});

function newGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.style.height = `${640 / size}px`;
        div.style.width = `${640 / size}px`;
        container.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });

    }

}
function cleanGrid() {
    let divs = document.querySelectorAll('.container>div');
    divs.forEach((div) => {
        div.remove();

    })
}

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => {
    let divs = document.querySelectorAll('.container>div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor;

        })
    })

});

const black = document.querySelector('.black');
black.addEventListener('click', () => {
    let divs = document.querySelectorAll('.container>div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    })

})


newGrid(size);
