const imagenes = document.querySelectorAll('.imagenes-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-ligth')
const hamburguer1 = document.querySelector(".hamburguer")




imagenes.forEach( imagene =>{
     imagene.addEventListener('click', () =>{
         
         aparecerImagen(imagene.getAttribute('src')  )
     })
})
contenedorlight.addEventListener('click', (e) =>{
   if(e.target!==imageneslight){
       contenedorlight.classList.toggle('show')
       contenedorlight.classList.toggle('showimage')
       hamburguer1.style.opacity = '1'
       


   }

})



const aparecerImagen = (imagen)=>{
    imageneslight.src = imagen;
    contenedorlight.classList.toggle('show')
    contenedorlight.classList.toggle('showimage')
    hamburguer1.style.opacity = '0'

    
        
    
}