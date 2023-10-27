async function bubble(){
    console.log('In bubble sort');

    const ele = document.querySelectorAll(".bar");

    for(let i = 0;i< ele.length-1 ;i++){
        console.log("inside ith loop")

        for(let j = 0;j< ele.length-i-1;j++){
            console.log("inside jth loop")
            ele[j].style.background = "blue";
            ele[j+1].style.background = "blue";

            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log("in if condition");
                await waitForMe(delay);
                swap(ele[j],ele[j+1]);
            }
            ele[j].style.background = "cyan";
            ele[j+1].style.background = "cyan";
        }
        ele[ele.length - 1- i].style.background = "green";
    }
    ele[0].style.background = "green";
}

const bubbleSortBtn = document.querySelector(".bubbleSort");
bubbleSortBtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})