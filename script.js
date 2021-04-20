const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');
const img = document.querySelectorAll('.img');
const imgBlock = document.querySelector('.img-block');
const decoration = document.querySelectorAll('.decoration');

let count = 0;
function slide(n){
    for(let i = 0; i < img.length; i++){
        if(i === n){
            img[i].style.opacity = 1;
            img[i].style.left = '0px';
            decoration[i].style.background = '#000';
        }else {
            img[i].style.opacity = 0;
            img[i].style.left = '-600px';
            decoration[i].style.background = '#ccc'
        }  
    }
}

slide(count);

function nextSlide(){
    count++;
    if(count > img.length - 1){
        count = 0;
    }
    slide(count);
}

function prevSlide(){
    count--;
    if(count < 0){
        count = img.length - 1;
    }
    slide(count);
}

nextBtn.onclick = function(){
    nextSlide();
}

prevBtn.onclick = function(){
    prevSlide();
}

//decoration 

for(let i = 0; i < decoration.length; i++) {
    decoration[i].onclick = function(){
        count = i;
        slide(count);
    }
}
                                                   
//Phone version drag...

let xDown = null;                                                        
let yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];                                    
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) { 
            count--;
            if(count < 0){
                count = img.length - 1;
            }
            slide(count);
        } else {
            count++;
            if(count > img.length - 1){
                count = 0;
            }
            slide(count);
        }                       
    }
    xDown = null;
    yDown = null;                                             
};

//Computer version drag...

let xDownPc = null;                                                        
let yDownPc = null;

function handleTouchStartPc(e){
    xDownPc = e.clientX;
    yDownPc = e.clientY;
}

function handleTouchMovePc(e) {
    if ( ! xDownPc || ! yDownPc ) {
        return;
    }

    let xUp = e.clientX;                                    
    let yUp = e.clientY;

    let xDiff = xDownPc - xUp;
    let yDiff = yDownPc - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) { 
            count--;
            if(count < 0){
                count = img.length - 1;
            }
            slide(count);
        } else {
            count++;
            if(count > img.length - 1){
                count = 0;
            }
            slide(count);
        }                       
    }
    xDownPc = null;
    yDownPc = null;                                             
};

imgBlock.addEventListener('touchstart', handleTouchStart, false);        
imgBlock.addEventListener('touchmove', handleTouchMove, false);

imgBlock.addEventListener('mousedown', handleTouchStartPc, false);
imgBlock.addEventListener('mousemove', handleTouchMovePc, false);