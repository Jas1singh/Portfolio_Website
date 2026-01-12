let menu = document.querySelector('.menu');
let ul = document.querySelector('ul');

menu.addEventListener('click', () => {
    ul.classList.toggle('menu_active');

    let menu_child = menu.firstElementChild;
    if(ul.classList.contains('menu_active')){
        menu_child.classList.replace('fa-bars','fa-xmark');
    }

    else{
        menu_child.classList.replace('fa-xmark', 'fa-bars');
    }
});

