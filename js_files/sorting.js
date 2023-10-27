// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(bar1, bar2) {
    console.log('In swap()');
    
    let temp = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = temp;
    
}
// Disables sorting buttons, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
}

// Enable sorting buttons, so that we can disable during sorting and enable buttons after it
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
}

//Disable size slider
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

//Enable size slider
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

//Disables newArray button
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

//Enables newArray button
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitForMe(millisec){
    return new Promise(
        resolve => {
            setTimeout(()=> { resolve('')}, millisec);
        })
}

//selecting ArraySize
let arraySize = document.querySelector('#arr_sz');

//event listner to update bars on UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value , typeof(arraySize.value))
})

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

//creating array to store randomly generated numbers
let array = [];

//call to display bars right when you visit the site;
createNewArray();

function createNewArray(noOfBars= 60){
    //delete old bars
    deleteChild();

    array = [];
    for(let i = 0;i < noOfBars ;i++){
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    //select the #bars
    const bars = document.querySelector('#bars');

    //create multiple element div using loop and adding class "bar col"

    for(let i = 0;i< noOfBars;i++){
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

//delete previous bars 
function deleteChild(){
    const bar = document.querySelector('#bars');
    bar.innerHTML = '';
}

//selection newArrayButton and adding event listner
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From new Array "+ arraySize.value);
    console.log("From new Array "+ delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
})