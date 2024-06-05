

const screenWidth = window.innerWidth;
const container = document.getElementById('card-container');
if (screenWidth < 800) {

    Array.from(container.children).forEach(child => {
        child.classList.remove('w-3/12');
        child.classList.add('w-8/12', 'mt-3','items-center');
    });
   
}
else {
    Array.from(container.children).forEach(child => {
        child.classList.add('w-3/12');
        child.classList.remove('w-/12', 'mt-3','items-center');
    });
}