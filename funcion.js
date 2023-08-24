const paneles = document.querySelectorAll('.panel');

function desactivarClase(){
    paneles.forEach(panel=>{
        panel.classList.remove('on')
    })
};

paneles.forEach(panel => {
    panel.addEventListener('click', ()=>{
        desactivarClase()
        panel.classList.add('on');
    })
})