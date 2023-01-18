let offset = 0; // смещение 
const sliderLine = document.querySelector('.slide_items_txt');

const movePx =  document.querySelector('.slide_item_txt').clientHeight;
const lengthElement = document.querySelectorAll('.slide_item_txt').length;

const lll = sliderLine.clientHeight;
console.log(lll)


document.querySelector('.btn_down').addEventListener("click",function(){
    offset = offset + 100;
    // if (offset > ((lengthElement-1)*movePx)) {
    //     offset = 0;
    // }
    if(offset > 2500){
        offset = 2500;
    }
    sliderLine.style.top = -offset + 'px';
});

document.querySelector('.btn_up').addEventListener("click",function() {
    offset = offset - 100;
    // if (offset < 0) {
    //     offset = ((lengthElement-1)*movePx);
    // }
    if(offset < 0){
        offset = 0;
    }
    sliderLine.style.top = -offset + 'px';
});

