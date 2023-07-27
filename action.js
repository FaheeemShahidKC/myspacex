
const menubtn = document.getElementById('menu-btn');
const openshade= document.getElementById('open-shade');
const menu= document.getElementById('side-menu-id');

function navToggle(){
    menubtn.classList.toggle('open');
    openshade.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scroll');
    menu.classList.toggle('show-menu')
}