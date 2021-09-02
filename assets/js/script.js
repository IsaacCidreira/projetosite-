function stars(){
    let count = 20;
    let scene = document.querySelector('.scene');
    
    for( let i = 0; i < count; i++){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random () * 100;
        star.style.left = x + 'px';
        star.style.width= 1 + 'px';
        star.style.height= 50+h + 'px';
        star.style.animationDuration = duration + 's';

        scene.appendChild(star);

    }
}
stars();
var elemento = document.querySelector('.rocket');
elemento.removeEventListener('onmouseout', stars()); 

        
function clicou () {
    let menuArea = document.getElementById('menu-area');
    if (menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened')
    } else {
        menuArea.classList.add ('menu-opened')
    }

    let menuArea1 = document.getElementById('menu-opener');
    if (menuArea1.classList.contains('menu-arrow') == true) {
        menuArea1.classList.remove('menu-arrow')
    } else {
        menuArea1.classList.add ('menu-arrow')
    }

}



const menuSelect = document.querySelectorAll('[data-menu="menu"] a[href^="#"]')
const userEvent = ['touchstart', 'click']
function addAtiva(event){
    event.preventDefault();
    menuSelect.forEach(e=> e.classList.remove('ativa'))
    event.currentTarget.classList.add('ativa')

}
 
menuSelect.forEach((event)=>{
   userEvent.forEach(userEvents => event.addEventListener(userEvents, addAtiva))
})

 /* document.addEventListener("mousemove", function(e){
    let rocket = document.querySelector('.rocket');
    rocket.style.left = e.offsetX +'px';
    rocket.style.top = e.offsetY +'px';
    console.log(e)
})  ;    
const redes = document.querySelector('.redes')
redes.addEventListener('mouseleave', ()=>{
    
}) */
/* function mouseMoveHandler (e) {
    let rocket = document.querySelector('.rocket');
    rocket.style.left = e.offsetX +'px';
    rocket.style.top = e.offsetY +'px';
}

document.addEventListener("mousemove", mouseMoveHandler)

const mousemove = document.querySelectorAll('.movimentacao')

mousemove.forEach(elemento => {
    elemento.addEventListener('mouseenter', () => {
        document.removeEventListener('mousemove', mouseMoveHandler)
    })
    elemento.addEventListener('mouseleave', () => {
        document.addEventListener('mousemove', mouseMoveHandler)
    })
}) */
/* document.addEventListener("mousemove", e => {
    let rocket = document.querySelector('.rocket');
    rocket.style.left = e.clientX +'px';
    rocket.style.top = e.clientY +'px';
}) */