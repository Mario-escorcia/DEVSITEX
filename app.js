// html elements
const whatsappBtn = document.getElementById('whatsappButton');
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu-responsive');
const closeMenuIcon = document.getElementById('close-menu-icon');
const nav = document.getElementById('navbar');
const home = document.getElementById('home');
const products = document.getElementById('products');
const about = document.getElementById('about')
const contact = document.getElementById('contact')



// varibles 

let menu_active = false;


// functions creation
const conctactWhatsapp = ()=>{
    window.open('https://api.whatsapp.com/send/?phone=573004548276')
}

const openMenu = ()=>{
    if (menu_active) {
        menu.style.display = 'none';
        menu_active = false;
    }else if(menu_active == false){
        menu.style.display = 'flex';
        menu_active = true;
    }
}


// function Animation(target,delay,duration,origin,distance) {

//     ScrollReveal().reveal(target,{
//         delay: delay,
//         duration: duration,    
//         origin: origin,
//         distance : distance,
//         reset : true
    
//     });
// }


// Animation(nav,200,1000,'top','100px');
// Animation(home,200,1000,'right','200px');
// Animation(products,200,1000,'left','120px');
// Animation(about,200,1000,'right','120px');
// Animation(contact,200,1000,'left','120px');



// eventListeners and function executions

whatsappBtn.addEventListener('click' , (e)=>{
    conctactWhatsapp()
})

menuIcon.addEventListener('click' , (e)=>{
    openMenu()
})


closeMenuIcon.addEventListener('click' , (e)=>{
    openMenu()
})

