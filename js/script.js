import{informations}from "./datas.js";


/*********************  creation des div, classes et tag ****************************************************************/
const matches = document.querySelectorAll("p");

let body = document.getElementsByTagName('body');
/* le grand conteneur qui contient tous les elements*/
let main = document.getElementById('main');
let conteneur = document.createElement('div');
main.appendChild(conteneur);
conteneur.id = 'contener';


/* les elements du headers */
let header = document.createElement('header');
conteneur.appendChild(header);
header.className = "marcket_head";
let divhead = document.createElement('div');
divhead.classList.add("marcket_head_title");
header.appendChild(divhead);
let ilogo = document.querySelector('ul>li>i');
let img_head = new Image(50, 50);
img_head.src = "images/logo.png";
divhead.appendChild(img_head);
let paragraphe_head = document.createElement('p');
divhead.appendChild(paragraphe_head);
paragraphe_head.innerText = "Light Market";

/* les elements de la nav*/
let nav = document.createElement('nav');
header.appendChild(nav);
nav.className = 'nav_bar';
nav.innerHTML ="<ul> <li><i></i> Produits </li><li><i></i> Panier </li> <ul><li>Contenu panier </li>  <div></div>     <li>Vider Le Panier </li></ul>"
let ul1 = nav.childNodes[0];
ul1.className = "navbar_ul1";
let lesnavli = document.querySelector('nav > ul');
let sous_ul = ul1.childNodes[4];
sous_ul.className = "navbar_ul2";
let sous_ulli1 = sous_ul.childNodes[0] ;
sous_ulli1.className = "panier_item1";
let sous_ulli2 = sous_ul.childNodes[4];
sous_ulli2.className = "panier_item2";
let liItem1 = ul1.childNodes[1];
let liItem2 = ul1.childNodes[2];
liItem1.className = "item1";
liItem2.className = "item2";
let panier_item2 = document.querySelector('.panier_item2');

/* Ajouter des icons au menu */
let icon1 = liItem1.firstChild;
icon1.className = "fas fa-gifts";
let icon2 = liItem2.firstChild;
icon2.className = "fas fa-shopping-cart";
let panier_item1 = document.querySelector('.panier_item1');

let divbo2 = sous_ul.childNodes[2];
divbo2.className = "span_bttom0";


let divbo = document.createElement('div');
sous_ul.appendChild(divbo);
divbo.className = "span_bttom1";
let span_bttom1 = sous_ul.lastChild;




let principal_section = document.createElement('section');
main.appendChild(principal_section);
principal_section.id = "principal_sect";
let recherche = document.createElement('div');
principal_section.appendChild(recherche);
recherche.className = "recher_princi";
recherche.innerHTML = "<div><i>  </i></div><label><input ></label><div> <img /></div> ";
let toggle_head = recherche.children[0];
toggle_head.className = "toggle.head";
let img_toggle_head = toggle_head.children[0];
img_toggle_head.className = "fas fa-bars";
let user = recherche.childNodes[2];
user.className = "user";
user.innerHTML = "<img />";
let user_pp = user.childNodes[0];
user_pp.setAttribute("src", "images/user.jpg");
let label_input = recherche.childNodes[1];
label_input.className = "label_input";
let input_rech  = recherche.children[1].children[0];
input_rech.setAttribute("type", "text");
input_rech.setAttribute("name", "name");
input_rech.setAttribute("placeholder", "search produits");

let produits_visible = document.createElement('section');
principal_section.appendChild(produits_visible);
produits_visible.className = "produits_dispo";





/*********************  creation DE LA BARRE DE RECHERCHE ****************************************************************/
/**
 * styling section produits name, montant, button (ajouter au panier )
 */

 let section_produits = principal_section.childNodes[1];
 section_produits.className = "ps_produits";
 section_produits.innerHTML = `<div class="bloc_prods "></div>`;
                                
 let div_prod_content = document.querySelector('.bloc_prods');




/*********************  creation DE LA BARRE DE RECHERCHE ****************************************************************/
/** affichage aitomatique des informations du tableau dans la page web****/
/*********************  creation DE LA BARRE DE RECHERCHE ****************************************************************/
/** affichage aitomatique des informations du tableau dans la page web****/
/*********************  creation DE LA BARRE DE RECHERCHE ****************************************************************/
/** affichage aitomatique des informations du tableau dans la page web****/

let chemin_image = [];
let nom_Produits = [];
let prix_produits = [];
let i = [];
let template_produits = "";
let _id = [];


//afficher les données dans les variables.

    

function Afficherproduits(informations){
    
    for(i = 0; i<informations.length; i++){

        informations.forEach((elem, i) =>{
            _id[i] = elem._id;
            chemin_image[i] = elem.chemin_image;
            nom_Produits[i] = elem.nom_Produits;
            prix_produits[i] = elem.prix_produits;
        })
        // inserer le html

        template_produits  +=
`<div class="pro_content">
        <div class="content_bloc-img"><img src ="${chemin_image[i]}"></div>
        <div class="prod_text">
            <p class="pro_name">${nom_Produits[i]} </p>  
            <p class="prod_prix">${prix_produits[i]} $ </p>
            <a  href="destination_produits.html?id=${_id[i]}">
                <div class="btn_add">voir</div>
            </a>
        </div>
     </div>`;
    div_prod_content.innerHTML = template_produits;
    }
}

Afficherproduits(informations);
let pro_content = document.getElementsByClassName('pro_content');
let prod_content = document.getElementsByClassName('pro_content');
let content_bloc_img = document.getElementsByClassName('content_bloc-img');
let image_produits = document.querySelector('.content_bloc-img > img');
let prod_text = document.getElementsByClassName('prod_text');
let pro_name = document.getElementsByClassName('pro_name');
let pro_prix = document.getElementsByClassName('pro_prix');
let btn_add = document.getElementsByClassName('btn_add');





/********************* ONLY css ****************************************************************/

/********************* ONLY css ****************************************************************/

/********************* ONLY css ****************************************************************/

/********************* ONLY css ****************************************************************/

/********************* ONLY css ****************************************************************/

/********************* ONLY css ****************************************************************/


/* styling menu css */


conteneur.style.width = "18%" ;
conteneur.style.transition = "all .9s" ;
header.style.width = "100%" ;
header.style.color = "white" ;
header.style.height = "calc(100vh - 14px) ";
header.style.backgroundColor = "#266454";
nav.style.marginTop = "50%" ;
nav.style.lineHeight = "5rem" ;
nav.style.fontSize = "1rem" ;
divhead.style.display = "flex";
paragraphe_head.style.fontWeight = "bold";
paragraphe_head.style.fontSize = "1rem";
img_head.style.marginTop = "12px";
paragraphe_head.style.fontFamily ="'Expletus Sans', cursive"  ;
lesnavli.style.listStyle = 'none';

let secondli = document.getElementsByClassName('.items2');
liItem2.style.cursor = "pointer";
liItem1.style.cursor = "pointer";
sous_ul.style.listStyle = 'none';
sous_ul.style.fontSize = '13px';
sous_ul.style.lineHeight = '2.5rem';
sous_ul.style.letterSpacing = '0px';
sous_ul.style.opacity = '0';
span_bttom1.style.height= "0px";

span_bttom1.style.backgroundColor = "white";
span_bttom1.style.width = "2px";
divbo2.style.width = "0px";
divbo2.style.height= "2px";
divbo2.style.backgroundColor = "white";
divbo2.style.transition = 'all .5s';
sous_ul.style.transition = "all .7s";
span_bttom1.style.transition = 'all .5s';

function cursor(e){
    e.target.style.cursor = "pointer";
    };

let visible = false;
liItem2.addEventListener('click',(e)=>{
    cursor(e);
    visible =!visible;
    visible? sous_ul.style.opacity = '1':sous_ul.style.opacity = '0';  
})

panier_item1.addEventListener('mouseover',(e)=>{
    cursor(e);
    divbo2.style.width = "70%";
    divbo2.style.height = "2px";
    
})
panier_item1.addEventListener('mouseout',(e)=>{
    divbo2.style.width = "0px";
    divbo2.style.height = "2px";
    
})
panier_item2.addEventListener('mouseover',(e)=>{
    cursor(e);
        span_bttom1.style.width = "70%";
        span_bttom1.style.height = "2px";
    
})
panier_item2.addEventListener('mouseout',(e)=>{
        span_bttom1.style.width = "0px";
        span_bttom1.style.height = "2px";
    
})


panier_item1.addEventListener('click',(e)=>{
    e.stopPropagation()
    e.preventDefault()
    window.location.href = "panier.html";
    
})



/***********styling section principale  ***************************/
principal_section.style.backgroundColor = "#EAFCF0";

/***********styling input  */
main.style.display = 'flex';
principal_section.style.flexGrow = 1;
principal_section.style.flexShrink = 5;

/***********styling input  ************************/
recherche.style.backgroundColor = "white";
recherche.style.margin = "20px 0";
recherche.style.height = "4rem";
input_rech.style.height= "2rem";
input_rech.style.width= "30%";
input_rech.style.height= "1.7rem";
input_rech.style.marginLeft= "calc(50% - 15%)";
input_rech.style.marginTop= "calc(5rem - 4rem)";
input_rech.style.borderRadius= "30px";
input_rech.style.paddingLeft= "10px";




/***********styling section recherche   ************************/

recherche.style.justifyContent = "space-between";
label_input.style.flexGrow = "2";
img_toggle_head.style.fontSize = "2.2rem";
img_toggle_head.style.paddingTop = ".8rem";
img_toggle_head.style.cursor = "pointer";
toggle_head.style.paddingLeft = "20px";
user.style.width = "55px";
user.style.height = "55px";
user_pp.style.height = "100%";
user_pp.style.height = "100%";
user_pp.style.borderRadius = "100%";
user.style.paddingRight = ".5rem";
user_pp.style.paddingTop = ".2rem";
recherche.style.display = "flex";

let test = true;
img_toggle_head.addEventListener('click', (e)=>{
if(test){
    conteneur.style.width = "0px" ;
    ul1.style.marginLeft = "-32px";
test = false;
}
else
{
    conteneur.style.width = "18%";
    ul1.style.marginLeft = "0%";
    test = true;
}

})

/***********styling section produits name, montant, button (ajouter au panier )   ************************/

/*****bouton d'ajout de produit au panier */
div_prod_content.style.display = "flex";
div_prod_content.style.flexWrap = "wrap";
div_prod_content.style.justifyContent = "space-between";
div_prod_content.style.backgroundColor = "white";
div_prod_content.style.borderRadius = "10px";
div_prod_content.style.padding ="2rem";

/***********styling elemeny for class prod_content   ************************/
for(let i=0; i<prod_content.length;i++){
    prod_content[i].style.transition = "all .3s";
    prod_content[i].style.flexDirection = "column";
    prod_content[i].style.lineHeight = "1rem";
    prod_content[i].style.justifyContent = "center";
    prod_content[i].style.width = "16%";
    prod_content[i].style.padding = "10px"; 
    prod_content[i].style.borderRadius = "3px";
}
for(let i=0; i<content_bloc_img.length;i++){
    content_bloc_img[i].style.maxWidth = "180px";
    content_bloc_img[i].style.maxHeight = "180px";
    content_bloc_img[i].children[0].style.height = "100%";
    content_bloc_img[i].children[0].style.width = "100%";
    content_bloc_img[i].children[0].style.marginTop ="15px";
}
    
    for(const elem of btn_add){
        elem.style.display = "flex";
        elem.style.padding = "10px";
        elem.style.height = ".3rem";
        elem.style.cursor = "pointer";
        elem.style.justifyContent = "center";
        elem.style.alignItems = "center";
        elem.style.color = "crimson";
        elem.style.borderRadius = "20px";
        elem.style.transition = "all .3s";
        elem.style.cursor = "pointer";
        elem.style.border = "1px solid crimson";
        elem.style.transition = "all .3s";

    }

for(const elem of prod_content){
    elem.addEventListener('mouseover', function(){
        elem.style.boxShadow = "2px 2px 18px 10px #DAFAE6";
    })
}
for(const elem of prod_content){
    elem.addEventListener('mouseout', function(){
        elem.style.boxShadow = "none";
    })
}

section_produits.style.padding = "20px";

for(const elem of btn_add){
    elem.addEventListener('mouseover',()=>{
        elem.style.backgroundColor = "crimson";
        elem.style.color = "white";
})
}
for(const elem of btn_add){
    elem.addEventListener('mouseout',()=>{
        elem.style.backgroundColor = "white";
        elem.style.border = "1px solid crimson";
        elem.style.color = "crimson";

})
}







