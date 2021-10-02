import{informations}from "./datas.js";

//récuperation des elements ce trouvant  après le ? dans l'url.

const queryString_url_id = window.location.search;


// let leId = queryString_url_id.slice(4);
// console.log(leId);

let UrlSearchParams = new URLSearchParams(queryString_url_id);
let id = UrlSearchParams.get("id");


// renvoyer un object dans un tableau selon une condition grace a la methode .find

const idProduitSelectionner = informations.find((element) => element._id === id );


//affichage du produit selectionné 
let body = document.querySelector('body');
let sectionAffichage = document.createElement('section');
body.appendChild(sectionAffichage).firstChild;
const divAffichageProduits = document.createElement('div');
sectionAffichage.appendChild(divAffichageProduits);
divAffichageProduits.className='affichage-produit-select';

divAffichageProduits.innerHTML =`
<div class= "prod_affiche_container"> 
    <div class="affichage_pro_content">
    <div class="affichage_content_bloc-img"><img src ="${idProduitSelectionner.chemin_image}"></div>
        <div class="prod_text">
            <p class="affichage_pro_name">${idProduitSelectionner.nom_Produits}</p>  
            
            <p class="affichage_prod_prix">${idProduitSelectionner.prix_produits} $</p>
            <a  href="affichage_destination_produits.html?id=${idProduitSelectionner._id}" class="link_add_panier">
                <div class="affichage_btn_add">Ajouter au panier</div>
            </a>
        </div>
    </div>
</div>`;
let affichage_pro_content = document.querySelector('.affichage_pro_content');
let prod_affiche_container = document.querySelector('.prod_affiche_container');
let affichage_content_bloc_img = document.querySelector('.affichage_content_bloc-img');
let affichage_image = affichage_content_bloc_img.firstChild;
let affichage_btn_add = document.querySelector('.affichage_btn_add');
let prod_text = document.querySelector('.prod_text');
let link_add_panier = document.querySelector('.link_add_panier');
let affichage_pro_name = document.querySelector('.affichage_pro_name');


// ----------gestion du panier -----------------
//recupeartion des donnees selectionnees par l'utilisateur et envoie du panier

//selction du boutoon article du panier

affichage_btn_add.addEventListener('click', (e)=>{
    e.preventDefault();
    
    // récuperation des infos du produit selectionné

    let infosProduits = {
        le_id: idProduitSelectionner._id,
        cheminImage: idProduitSelectionner.chemin_image,
        nomProduit : idProduitSelectionner.nom_Produits,
        prixProduit : idProduitSelectionner.prix_produits
    }


//------------- local storage -----------------
// ---il s'agit de stocker les valeurs de infosproduit  apres avoir cliqué sur le boutton ajouté  au panier ----
/*  infosProduits etant un object JavaScript, il ne peut pas etre mis directement dans le local. il doit convertir dabord en object JSON; GRACE A LA FONCT
la fonction JSON.parse  */
// je déclare une variable,saveProduitInLocalStorage qui va contenir les keys et valeur qui sont dans le local storage
function message(){
    setTimeout(alert,1, 'produit ajouté au panier');
}
function ajouteProduitStockage (){
    saveProduitInLocalStorage.push(infosProduits);
    localStorage.setItem('produit', JSON.stringify(saveProduitInLocalStorage));
    message();
}
let saveProduitInLocalStorage = JSON.parse(localStorage.getItem("produit")) ;
// s'il y a des produits enregistres dans local storage

if(saveProduitInLocalStorage){
    ajouteProduitStockage();
    console.log(saveProduitInLocalStorage);
}
// s'il n'y a pas des produits enregistres dans local storage
else{
    saveProduitInLocalStorage = [];
     ajouteProduitStockage ();
    console.log(saveProduitInLocalStorage);
}


})




//styling produit affichage


prod_affiche_container.style.display = "flex";
prod_affiche_container.style.justifyContent = "center";
prod_affiche_container.style.backgroundColor = "#EAEDED";
prod_affiche_container.style.padding = "25px";

affichage_pro_content.style.width = "80%";
affichage_pro_content.style.display = "flex";
affichage_pro_content.style.backgroundColor = " #fff ";
affichage_content_bloc_img.style.width = "400px";
affichage_content_bloc_img.style.height = "300PX";
affichage_image.style.width = "100%";
affichage_image.style.height = "100%";
affichage_pro_name.style.fontSize = "2em";
prod_text.style.padding = "1em";

prod_text.style.display = "flex";
prod_text.style.flexDirection = "column";
prod_text.style.justifyContent = "space-between";
prod_text.style.marginTop = "-37px";
prod_text.style.paddingTop = "-20px";
prod_text.style.width = "50%";



affichage_btn_add.style.backgroundColor = "crimson";
affichage_btn_add.style.padding = "1em";
affichage_btn_add.style.color = "#fff";
link_add_panier.style.textDecoration = "none";
affichage_btn_add.style.borderRadius = ".4em";
affichage_btn_add.style.textAlign = "center";
affichage_btn_add.style.boxShadow = "0px 5px 5px  #fff";







