let offset = 0; // смещение 
const sliderLine = document.querySelector('.slide_items');

const movePx =  document.querySelector('.slide_item').clientWidth;
const lengthElement = document.querySelectorAll('.slide_item').length;

document.querySelector('.btn_right').addEventListener("click",function(){
    offset = offset + movePx;
    if (offset > ((lengthElement-1)*movePx)) {
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
});

document.querySelector('.btn_left').addEventListener("click",function() {
    offset = offset - movePx;
    if (offset < 0) {
        offset = ((lengthElement-1)*movePx);
    }
    sliderLine.style.left = - offset + 'px';
});

