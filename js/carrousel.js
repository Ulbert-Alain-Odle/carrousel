



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
    
    //Aller chercher tout les bouton radion dans le carrousel
    
    let galerie__imgs = galerie.querySelectorAll('img');
    console.log(galerie__imgs);
    
    let index = 0;
    
    for (const elm of galerie__imgs) {
        console.log(elm.src);
        elm.dataset.index = index;
        creerImageCarrousel(elm,index)
        creerRadioCarrousel(index);
        console.log(index);
        //ajouter un event listener sur les image
        elm.addEventListener('click', function(){
            carrousel.classList.add('carrousel--ouvrir');
            console.log(elm.dataset.index);
            carrousel__radios[elm.dataset.index].checked = true;
            activerLaBonneImg(elm.dataset.index);
        });
        index++;
    }
    

    //aller chercher tt les img du carrousel
    let carrousel__radios = document.querySelectorAll('.carrousel__radio');
    //mettre le premier radio en checked
    //carrousel__radios[0].checked = true;
    //mettre la première image en opacité 1 et les autres en 0
    let carrousel__imgs = carrousel__figure.querySelectorAll('.carrousel__img');
    for (const img of carrousel__imgs) {
        img.style.opacity = 0;
        //img.style.classList.add("hide");
    }
    carrousel__imgs[0].style.opacity = 1;
    //carrousel__imgs[0].classList.remove("hide");
    
    //création de 2 btn pour changer d'image vers la droite ou vers la gauche portant la classe carrousel__fleche
    let carrousel__fleche__gauche = document.createElement('button');
    carrousel__fleche__gauche.classList.add('carrousel__fleche');
    carrousel__fleche__gauche.classList.add('carrousel__fleche--gauche');
    carrousel__fleche__gauche.innerHTML = '<';
    
    let carrousel__fleche__droite = document.createElement('button');
    carrousel__fleche__droite.classList.add('carrousel__fleche');
    carrousel__fleche__droite.classList.add('carrousel__fleche--droite');
    carrousel__fleche__droite.innerHTML = '>';
    
    
    
    console.log(form);
    
    //appelé un fonction à partir du bouton de droite
    carrousel__fleche__droite.addEventListener('click', function(){
        let index = 0;
        for (const radio of carrousel__radios) {
            if(radio.checked){
                radio.checked = false;
                carrousel__imgs[index].style.opacity = 0;
                //carrousel__imgs[index].classList.add("hide");
                if(index == carrousel__radios.length - 1){
                    index = 0;
                }else{
                    index++;
                }
                carrousel__radios[index].checked = true;
                carrousel__imgs[index].style.opacity = 1;
                //carrousel__imgs[index].classList.remove("hide");
                break;
            }
            index++;
        }
    });
    
    //appelé un fonction à partir du bouton de gauche
    carrousel__fleche__gauche.addEventListener('click', function(){
        let index = 0;
        for (const radio of carrousel__radios) {
            if(radio.checked){
                radio.checked = false;
                carrousel__imgs[index].style.opacity = 0;
                //carrousel__imgs[index].classList.add("hide");
                if(index == 0){
                    index = carrousel__radios.length - 1;
                }else{
                    index--;
                }
                carrousel__radios[index].checked = true;
                carrousel__imgs[index].style.opacity = 1;
                //carrousel__imgs[index].classList.remove("hide");
                break;
            }
            index++;
        }
    }
    
    );
    
    
    carrousel.appendChild(carrousel__fleche__droite);
    carrousel.appendChild(carrousel__fleche__gauche);
    
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
            
            activerLaBonneImg(index);
        });
    }

    function creerImageCarrousel(elm,index){
        let carrousel__img = document.createElement('img');
        carrousel__img.classList.add("carrousel__img");
        carrousel__img.src = elm.src;
        carrousel__img.dataset.index = index;
        carrousel__figure.appendChild(carrousel__img);
    }

   

    boutonFermer.addEventListener('click', function(){
        carrousel.classList.remove('carrousel--ouvrir');
    });

    function activerLaBonneImg(index){
        for (const img of carrousel__imgs) {
            //img.classList.add("hide");
            img.style.opacity = 0;
        }
        carrousel__imgs[index].style.opacity = 1;
        //carrousel__imgs[index].classList.remove("hide");
    }
})();