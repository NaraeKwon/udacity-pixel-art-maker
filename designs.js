// Select color input
// Select size input
let sizePicker = document.querySelector('#sizePicker');
let table = document.querySelector('#pixelCanvas');
let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');
let color = document.querySelector('#colorPicker');


// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(evt){
    evt.preventDefault();
    //test whether it's working
    console.log('submitting');
    makeGrid(height.value, width.value);
});


//Access to each cell and change color
function colorChange(evt){
    if (evt.target.hasAttributes('style')){
        evt.target.removeAttribute('style');
        //test whether it's working
        console.log('removing');
    } else {
        evt.target.style.backgroundColor = color.value;
        //test whether it's working
        console.log('painting');
    };
}


function makeGrid(h, w){
    //Remove existing table using while loop
    while (table.firstElementChild !== null){
        table.firstElementChild.remove();
        console.log('deleting');
    };
    //Make grid;
    for (let i = 1; i <= h; i++){
        //Add element <tr>
        newTableRow = document.createElement('tr');
        for (let j = 1; j <= w; j++){
            //Add element <td>
            newTableTd = document.createElement('td');
            newTableRow.appendChild(newTableTd);
        };
    //Add event listener for each cell;
    table.addEventListener('click', colorChange);
    //Add childElement to the table
    table.appendChild(newTableRow);
    };
}
