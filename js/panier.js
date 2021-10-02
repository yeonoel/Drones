let saveProduitInLocalStorage = JSON.parse(localStorage.getItem("produit")) ;
let panier = document.querySelector('#panier');
console.log(saveProduitInLocalStorage);

let structureProduitsPanier = [];
if(saveProduitInLocalStorage == null || saveProduitInLocalStorage == 0){
      let panierVide =   `<div >
                                <div class="container_panier_vide">
                                    <div class= "panier_vide_title"> Panier</div>
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
                            panier.innerHTML = panierVide;


        let container_panier_vide = document.querySelector('.container_panier_vide')
        let panier_vide_title =document.querySelector('.panier_vide_title');
        let panier_vide_body = document.querySelector('.panier_vide_body');
        let panier_vide_icon_div =document.querySelector('.panier_vide_icon_div');
        let fa_shopping_cart = document.querySelector('.fa-shopping-cart');
        let panier_vide_text = document.querySelector('.panier_vide_text');
        let panier_vide_link_connexion =document.querySelector('.panier_vide_link_connexion');
        let panier_vide_btn =document.querySelector('.panier_vide_btn');

        // STYLING PANIER VIDE
        function cursor(e){
            e.target.style.cursor = "pointer";
            };


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
        panier_vide_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = "index.html";
});
panier_vide_btn.style.cursor = "pointer";

        




}else{
    panier. innerHTML = 
    `<div class = "panier_titles">
                <div class= "article"> 
                    <p class= ""> Article </p>
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
    <div class = "btn_vider_panier">
        vider panier
    </div> 
    <div class = "panier_montant_total">
            <p class="montant panier_montant_titre">Total :    </p><p class="montant panier_montant_montant">   $</p>
        </div>
    <div class="content_btn">
        <div class="panier_all_btn">
            <p class = "panier_btn1 btn"> Poursuivre vos achats </p>
            <p class = "panier_btn2 btn"> Finaliser votre commande </p>
        </div>
    </div>`

    for(j = 0; j<saveProduitInLocalStorage.length; j++){

    structureProduitsPanier = structureProduitsPanier + 
    `
        <div class="content_produits">
            <div class = "panier_produits">
                <div class= ""> 
                    <div class= "panier_articles"> 
                        <div class= "panier_article_img"><img src="${saveProduitInLocalStorage[j].cheminImage}" alt="" class="parnier_arti_img"/></div><p class= "panier_name_produit">${saveProduitInLocalStorage[j].nomProduit}</p>
                    </div>
                    <p class = "btn_produits_panier_supp"><i class="fas fa-trash-alt"></i>  supprimer</p>
                </div>
                <div class="panier_produits_quantité">
                <select class="choix_quantite_produit "">
                    <option  value=""><i class="fas fa-angle-down"></i>1</option>
                    <option value="cat">2</option>
                    <option value="hamster">3</option>
                    <option value="parrot">4</option>
                    <option value="spider">5</option>
                    <option value="goldfish">6</option>
                </select>
                </div>
                <div class="panier_produits_prix_unitaire">
                    <p>${saveProduitInLocalStorage[j].prixProduit} $</p>
                </div>
                <div class="panier_produits_sous_total">
                    <p> 20 $</p>
                </div>
            </div> 

        </div><br/>
`;

    }




}

let container = document.querySelector('.container');
container.innerHTML = structureProduitsPanier;

let content_produits = document.getElementsByClassName('content_produits');
let panier_article_img = document.getElementsByClassName('panier_article_img');
let parnier_arti_img = document.getElementsByClassName('parnier_arti_img');
let panier_titles = document.querySelector('.panier_titles');
let panier_titles_div = document.getElementsByClassName('panier_titles > div');
let article = document.querySelector('.article');
let panier_produits = document.getElementsByClassName('panier_produits');
let panier_produits_quantité = document.getElementsByClassName('panier_produits_quantité');
let panier_quantite = document.querySelector('.quantite');
let panier_produits_prix_unitaire = document.getElementsByClassName('panier_produits_prix_unitaire');
let panier_prix_unit = document.querySelector('.prix_unit');
let panier_sous_total = document.querySelector('.sous_total');
let panier_produits_sous_total = document.getElementsByClassName('panier_produits_sous_total');
let montant = document.getElementsByClassName('montant');
let panier_montant_titre = document.querySelector('.panier_montant_titre');
let panier_montant_montant = document.querySelector('.panier_montant_montant');
let btn = document.getElementsByClassName('btn');
let panier_btn1 = document.querySelector('.panier_btn1');
let panier_btn2 = document.querySelector('.panier_btn2');
let panier_name_produit = document.getElementsByClassName('panier_name_produit');
let panier_articles = document.getElementsByClassName('panier_articles');
let panier_montant_total = document.querySelector('.panier_montant_total');
let panier_all_btn = document.getElementsByClassName('panier_all_btn');
let content_btn = document.querySelector('.content_btn');
let btn_produits_panier_supp = document.querySelectorAll('.btn_produits_panier_supp');
let btn_vider_panier = document.querySelector('.btn_vider_panier');
let choix_quantite_produit = document.getElementsByClassName('choix_quantite_produit');
let choix_quantite_produit_option = document.querySelectorAll('.choix_quantite_produit > option');


console.log(choix_quantite_produit_option)





btn_vider_panier.addEventListener('click', (e)=>{
    e.preventDefault();
    
    if(window.confirm("votre panier sera vidé")){
        localStorage.removeItem("produit");
        window.location.href = 'panier.html';
    }
    
})



let prixTotalPanier = [];

for(let l = 0; l<saveProduitInLocalStorage.length; l++){
    prixTotalPanier.push(saveProduitInLocalStorage[l].prixProduit);
}
console.log(prixTotalPanier)
const reducer = (accumulateur , currentValue) => accumulateur + currentValue;

let montantTotalPanier = prixTotalPanier.reduce(reducer);

let montantTotal = `
            ${montantTotalPanier}
     
`

panier_montant_montant.insertAdjacentText('afterbegin',montantTotal)






//-----------panier styling --------------
choix_quantite_produit_option
Array.from(choix_quantite_produit_option).forEach((element)=>{
    element.style.textDecoration = "none";
    element.style.border = "none";
    element.style.cursor = "pointer";
  
})
Array.from(choix_quantite_produit).forEach((element)=>{
    element.style.border = "none";
    element.style.cursor = "pointer";
    element.style.width = "20%";
})


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


Array.from(panier_article_img).forEach((element) => {
    element.style.width = "70px";
    element.style.height = "70px";
});

Array.from(parnier_arti_img).forEach(element => {
    element.style.width = "100%";
    element.style.height = "100%";
});


Array.from(panier_name_produit).forEach(element => {
    element.style.paddingLeft = "20px";
    element.style.letterSpacing = "10px";
});


Array.from(panier_articles).forEach(element => {
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.fontWeight = "700";
});


Array.from(panier_produits).forEach(element => {
    element.style.display = "grid";
    element.style.textAlign = "center";
    element.style.gridTemplateColumns = "2fr 1fr 1fr 1fr";
});

Array.from(content_produits).forEach(element => {
    element.style.cursor = "pointer";
    element.style.backgroundColor = "#fff";
    element.style.padding = "5px";
});


panier_montant_total.style.width = "80%";
panier_montant_total.style.margin = "auto";
panier_montant_total.style.display = "flex";
panier_montant_total.style.paddingRight = "40px";
panier_montant_total.style.justifyContent = "flex-end";



    panier_montant_titre.style.fontSize = "1.5em";
    panier_montant_titre.style.color = "crimson";
    panier_montant_titre.style.fontWeight = "500";
    panier_montant_titre.style.marginRight = "1.5em";




Array.from(panier_produits_quantité).forEach(element => {
    element.style.display = "flex";
element.style.alignItems = "center";
element.style.justifyContent = "center";
element.style.borderLeft = "1px solid #EAEDED";
});


    panier_montant_montant.style.fontSize = "1.5em";


// Array.from(montant).forEach(element => {
//     montant.style.paddingRight = "30px";
    
// });

Array.from(panier_produits_prix_unitaire).forEach(element => {
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.borderLeft = "1px solid #EAEDED";
});

panier_quantite.style.textAlign = "center"
panier_prix_unit.style.textAlign = "center"
panier_sous_total.style.textAlign = "center"




Array.from(panier_produits_sous_total).forEach(element => {
    
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.borderLeft = "1px solid #EAEDED";
});

Array.from(btn_produits_panier_supp).forEach((element) => {
    element.style.color = "crimson";
    
});

    content_btn.style.backgroundColor = "#fff";


Array.from(panier_all_btn).forEach(element => {
    element.style.display = "flex";
    element.style.width = "80%";
    element.style.margin = "auto";
    element.style.padding = "20px";
    element.style.justifyContent = "flex-end";
    });

Array.from(btn).forEach(element => {
        element.style.marginRight = "10px";
        element.style.padding = "15px";
        element.style.borderRadius = "5px";
        element.style.cursor = "pointer";
        });


    panier_btn2.style.backgroundColor = "crimson";
    panier_btn2.style.padding = "15px";
    panier_btn2.style.borderRadius = "5px";
    panier_btn2.style.color = "#fff";

    panier_btn1.style.boxShadow = "-10px 5px 10px rgba(0,0,0,0.3)";

    
    panier_btn1.addEventListener('click',(e)=>{
    e.stopPropagation()
    e.preventDefault()
    window.location.href = "index.html";
    
})
       
panier_btn2.addEventListener('click',(e)=>{
        e.stopPropagation()
        e.preventDefault()
        window.location.href = "#";
        
    })          


// BUTTON SUPPRIMER L'ARTICLE CE TROUVANT DANQS LE PANIER



for(let i=0; i<btn_produits_panier_supp.length; i++){
    btn_produits_panier_supp[i].addEventListener('click',(event)=>{
        
        let tab = [];
         tab = saveProduitInLocalStorage;
         tab.splice([i],1); 
        console.log(tab)
        saveProduitInLocalStorage = localStorage.setItem('produit', JSON.stringify(tab));
        console.log(saveProduitInLocalStorage)
        window.location.href = "panier.html";

    })

}

// styling button vider le panier

btn_vider_panier.style.width = "50%";
btn_vider_panier.style.margin = "auto";
btn_vider_panier.style.backgroundColor = "crimson";
btn_vider_panier.style.textAlign = "center";
btn_vider_panier.style.color = "white";
btn_vider_panier.style.borderRadius = "15px";
btn_vider_panier.style.cursor = "pointer";






