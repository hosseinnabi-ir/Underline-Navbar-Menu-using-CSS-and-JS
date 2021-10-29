const border = document.querySelector('.tabs .border');
const background = document.querySelector('.tabs .background');

const MoveTab = TabID => {
    border.style.transform = `translateX(${TabID * 90}px)`;
    background.style.transform = `translateX(${TabID * 90}px)`;
}