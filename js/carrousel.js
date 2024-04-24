



(function(){
    console.log("vive JS");
    let carrousel = document.querySelector('.carrousel');
    let bouton = document.querySelector('.bouton__ouvrir');
    let boutonFermer = document.querySelector('.carrousel__x');
    let galerie = document.querySelector('.galerie');
    console.log(galerie.tagName);
    let carrousel__figure = document.querySelector('.carrousel__figure');
    /*création dynamique d'img dans le carrousel*/ 
    let form = document.querySelector('.carrousel__form');


    //let galerie__img = galerie.querySelector('img');
    //console.log(galerie__img.src);
    //carrousel__img.src = galerie__img.src;
    //console.log(carrousel__img.src);
    
    
    let galerie__imgs = galerie.querySelectorAll('img');
    console.log(galerie__imgs);

    let index = 0;

    for (const elm of galerie__imgs) {
        console.log(elm.src);
        creerImageCarrousel(elm,index)
        creerRadioCarrousel(index);
        index++;
    }

    function creerRadioCarrousel(index){
        let carrousel__radio = document.createElement('input');
        carrousel__radio.classList.add("carrousel__radio");
        carrousel__radio.type = 'radio';
        carrousel__radio.name = 'radioCarrousel';
        carrousel__radio.dataset.index = index;
        form.appendChild(carrousel__radio);
        //ajouter un écouteur permettant de changer l'image du carrousel selon l'index du radio
        //carrousel__img.children[index].sttyle.opacity = 1; pour changer l'opacité de l'image
        carrousel__radio.addEventListener('click', function(){
            let index = this.dataset.index;
            let carrousel__imgs = document.querySelectorAll('.carrousel__img');
            for (const img of carrousel__imgs) {
                img.style.opacity = 0;
            }
            carrousel__imgs[index].style.opacity = 1;
        });
    }

    function creerImageCarrousel(elm,index){
        let carrousel__img = document.createElement('img');
        carrousel__img.classList.add("carrousel__img");
        carrousel__img.src = elm.src;
        carrousel__img.dataset.index = index;
        carrousel__figure.appendChild(carrousel__img);
    }


    bouton.addEventListener('click', function(){
        carrousel.classList.add('carrousel--ouvrir');
    });

    boutonFermer.addEventListener('click', function(){
        carrousel.classList.remove('carrousel--ouvrir');
    });
})();