

let saveProduitInLocalStorage = JSON.parse(localStorage.getItem("produit")) ;

let panier = document.querySelector('#panier');
console.log(saveProduitInLocalStorage);


// structue panier vide 





for(let i = 0; i<saveProduitInLocalStorage[j].optionsProd.length; i++){


    test = test + `<option value="0">${saveProduitInLocalStorage[j].optionsProd[i]}</option>` ;

    
}        
element[j].innerHTML = test;








let panierVide =   `<div >
<div class="container_panier_vide">
    <div class= "panier_vide_title">Panier</div>
    <div class= "panier_vide_body">
            <div class = "panier_vide_icon_div">
                <i class="fas fa-shopping-cart"></i>
            </div>
            <div class = "panier_vide_text"> Votre panier est video</div>
            <div class="panier_vide_link_connexion">Vous avez déjà un compte? <a href= "" >Connectez-vous</a> pour voir les articles dans votre panier.</div>
            <div class="panier_vide_btn"> Commencer vos achats</div>
    </div>



</div>
</div>`
;
let panierElementStatic =  `<div class = "panier_titles">
                                        <div class= "article"> 
                                            <p class= "article"> Article </p>
                                        </div>
                                        <div class="quantite">
                                            <p>Quantité</p>
                                        </div>
                                        <div class="prix_unit">
                                            <p>Prix unitaire</p>
                                        </div>
                                        <div class="sous_total">
                                            <p> Sous total</p>
                                        </div>
                                </div> 
                                        <div class = "container">
                                          
                                        </div> 
                                        <div class = "panier_montant_total">
                                            <p class="montant panier_montant_titre">Total :</p> <p class="montant panier_montant_montant">9999 $</p>
                                        </div>
                                        <div class="content_btn">
                                            <div class="panier_all_btn">
                                                <p class = "panier_btn1 btn"> Poursuivre votre achat </p>
                                                <p class = "panier_btn2 btn"> Finaliser votre commande </p>
                                            </div>
                                        </div>`;

console.log(panierElementStatic)


let container = document.querySelector('.container')
let content_produits = document.querySelector('.content_produits');
let panier_article_img = document.querySelector('.panier_article_img');
let parnier_arti_img = document.querySelector('.parnier_arti_img');
let panier_titles = document.querySelector('.panier_titles');
let panier_titles_div = document.querySelector('.panier_titles > div');
let article = document.querySelector('.article');
let panier_produits = document.querySelector('.panier_produits');
let panier_produits_quantité = document.querySelector('.panier_produits_quantité');
let panier_quantite = document.querySelector('.quantite');
let panier_produits_prix_unitaire = document.querySelector('.panier_produits_prix_unitaire');
let panier_prix_unit = document.querySelector('.prix_unit');
let panier_sous_total = document.querySelector('.sous_total');
let panier_produits_sous_total = document.querySelector('.panier_produits_sous_total');
let montant = document.querySelector('.montant');
let panier_montant_titre = document.querySelector('.panier_montant_titre');
let panier_montant_montant = document.querySelector('.panier_montant_montant');
let btn = document.querySelector('.btn');
let panier_btn1 = document.querySelector('.panier_btn1');
let panier_btn2 = document.querySelector('.panier_btn2');
let panier_name_produit = document.querySelector('.panier_name_produit');
let panier_articles = document.querySelector('.panier_articles');
let panier_montant_total = document.querySelector('.panier_montant_total');
let panier_all_btn = document.querySelector('.panier_all_btn');
let content_btn = document.querySelector('.content_btn');

console.log(container);




if(saveProduitInLocalStorage == null){
  
    panier.innerHTML = panierVide;




}else{
let structureProduitsPanier = [];

panier. innerHTML = panierElementStatic;

for(j = 0; j<saveProduitInLocalStorage.length; j++){

structureProduitsPanier = structureProduitsPanier + 
`
<div class="content_produits">
    <div class = "panier_produits">
        <div class= "panier_articles"> 
            <div class= "panier_article_img"><img src="${saveProduitInLocalStorage[j].cheminImage}" alt="" class="parnier_arti_img"/></div> <p class= "panier_name_produit">${saveProduitInLocalStorage[j].nom_Produits}</p>
        </div>
        <div class="panier_produits_quantité">
            <p> T2</p>
        </div>
        <div class="panier_produits_prix_unitaire">
            <p>${saveProduitInLocalStorage[j].prixProduits}</p>
        </div>
        <div class="panier_produits_sous_total">
            <p> 20 $</p>
        </div>
    </div> 

</div><br/>
`;



}
if(j == saveProduitInLocalStorage.length){
    container.innerHTML = structureProduitsPanier;
}


}

















//-----------panier styling --------------


panier.style.backgroundColor = "#EAEDED";
panier.style.fontFamily = "'Poppins', sans-serif";
panier.style.backgroundColor = "#EAEDED";
panier.style.padding = "20px";

container.style.width = "80%";
container.style.margin = "auto";

//styling panier titles 
panier_titles.style.width = "80%";
panier_titles.style.margin = "auto";

panier_titles.style.display = "grid";
panier_titles.style.gridTemplateColumns = "2fr 1fr 1fr 1fr";
panier_titles.style.fontWeight = "600";
panier_titles.style.textTransform = "uppercase";




panier_article_img.style.width = "100px";
panier_article_img.style.height = "100px";
parnier_arti_img.style.width = "100%";
parnier_arti_img.style.height = "100%";

panier_name_produit.style.paddingLeft = "20px";
panier_name_produit.style.letterSpacing = "10px";


panier_articles.style.display = "flex";
panier_articles.style.alignItems = "center";
panier_articles.style.fontWeight = "700";


panier_produits.style.display = "grid";
panier_produits.style.textAlign = "center";
panier_produits.style.gridTemplateColumns = "2fr 1fr 1fr 1fr";

content_produits.style.backgroundColor = "#fff";
content_produits.style.padding = "20px";

panier_montant_total.style.display = "flex"
panier_montant_total.style.display = "flex";
panier_montant_total.style.paddingRight = "40px";
panier_montant_total.style.alignItems = "center";
panier_montant_total.style.justifyContent = "flex-end";

panier_montant_titre.style.fontSize = "1.2em";
panier_montant_titre.style.color = "crimson";
panier_montant_titre.style.fontWeight = "500";

panier_produits_quantité.style.display = "flex";
panier_produits_quantité.style.alignItems = "center";
panier_produits_quantité.style.justifyContent = "center";
panier_produits_quantité.style.borderLeft = "1px solid #EAEDED";

panier_montant_montant.style.fontSize = "1.5em";

montant.style.paddingRight = "30px";


panier_produits_prix_unitaire.style.display = "flex";
panier_produits_prix_unitaire.style.alignItems = "center";
panier_produits_prix_unitaire.style.justifyContent = "center";
panier_produits_prix_unitaire.style.borderLeft = "1px solid #EAEDED";



panier_produits_sous_total.style.display = "flex";
panier_produits_sous_total.style.alignItems = "center";
panier_produits_sous_total.style.justifyContent = "center";
panier_produits_sous_total.style.borderLeft = "1px solid #EAEDED";






content_btn.style.backgroundColor = "#fff";

panier_all_btn.style.display = "flex";
panier_all_btn.style.width = "80%";
panier_all_btn.style.margin = "auto";
panier_all_btn.style.padding = "20px";
panier_all_btn.style.justifyContent = "flex-end";






btn.style.marginRight = "10px";
btn.style.padding = "15px";
btn.style.borderRadius = "5px";


panier_btn2.style.backgroundColor = "crimson";
panier_btn2.style.padding = "15px";
panier_btn2.style.borderRadius = "5px";



panier_btn1.style.boxShadow = "-10px 5px 10px rgba(0,0,0,0.3)";

panier_btn2.style.color = "#fff";



// PANIER VIDE

let container_panier_vide = document.querySelector('.container_panier_vide')
let panier_vide_title =document.querySelector('.panier_vide_title');
let panier_vide_body = document.querySelector('.panier_vide_body');
let panier_vide_icon_div =document.querySelector('.panier_vide_icon_div');
let fa_shopping_cart = document.querySelector('.fa-shopping-cart');
let panier_vide_text = document.querySelector('.panier_vide_text');
let panier_vide_link_connexion =document.querySelector('.panier_vide_link_connexion');
let panier_vide_btn =document.querySelector('.panier_vide_btn');

// STYLING PANIER VIDE ELEMNT
document.querySelector('.container_panier_vide > div').style.lineHeight = "5em";
document.querySelector('.panier_vide_body > div').style.lineHeight = "8em";
container_panier_vide.style.fontFamily = "'Poppins', sans-serif";
container_panier_vide.style.width = "80%";
container_panier_vide.style.margin = "auto";
panier_vide_body.style.width = "70%";
panier_vide_body.style.margin = "auto";
panier_vide_body.style.textAlign = "center";
panier_vide_icon_div.style.display = "flex";
panier_vide_icon_div.style.justifyContent = "center";
panier_vide_icon_div.style.alignItems = "center";
panier_vide_icon_div.style.width = "160px";
panier_vide_icon_div.style.margin = "auto";
panier_vide_icon_div.style.height = "160px";
panier_vide_icon_div.style.backgroundColor = "#fff";
panier_vide_icon_div.style.borderRadius = "100%";
fa_shopping_cart.style.fontSize = "5em"
fa_shopping_cart.style.color = "#ACABAA"
panier_vide_text.style.color = "#ACABAA";

panier_vide_btn.style.width = "30%";
panier_vide_btn.style.margin = "auto";
panier_vide_btn.style.padding = "10px";
panier_vide_btn.style.borderRadius = "5px";
panier_vide_btn.style.backgroundColor  = "crimson";
panier_vide_btn.style.color = "#fff";














