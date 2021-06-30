const d = document;

export default function botonHamburguesa(selecBoton, selecPanel){
    const $boton = d.querySelector(selecBoton),
        $panel = d.querySelector(selecPanel);

    d.addEventListener("click", e => {
        if(e.target.matches(selecBoton)){
            $panel.classList.toggle("panel--hidden");
        }
    })
}