const whatsappBtn = document.getElementById('whatsappButton')


const conctactWhatsapp = ()=>{
    window.open('https://api.whatsapp.com/send/?phone=3004548276' )
}

whatsappBtn.addEventListener('click' , (e)=>{
    conctactWhatsapp()
})