const toggle = document.querySelector('.menu img');
const menu   = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
})

window.addEventListener('click', (e) => {
    if(menu.classList.contains('active') && e.target != toggle && e.target != menu){
        menu.classList.toggle('active');    
    }
})