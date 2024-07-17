function moveSlider(index) {
    sliderInner.style.transform = `translateX(${-100 * index}%)`;
}

function handleClick(event) {
    const targetArrow = event.target.closest('.btn');

    if (targetArrow.classList.contains('left-btn')) {
        if (count > 0) {
            count -= 1;
        }
    } else {
        if (count < sliderItemsLength - 1) {
            count += 1;
        }
    }

    moveSlider(count);
}

const arrowLeft = document.querySelector('.left-btn');
const arrowRight = document.querySelector('.right-btn');
const sliderInner = document.querySelector('.banner_inner');
const sliderItemsLength = document.querySelectorAll('.banner-photo').length;
let count = 0;


arrowLeft.addEventListener('click', handleClick);
arrowRight.addEventListener('click', handleClick);