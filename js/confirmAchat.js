let  idProduitConfirm = localStorage.getItem("idProduitConfirm");
let formulaireElementValue = JSON.parse(localStorage.getItem('formulaireElementValue'));
let montantTotalAchat = localStorage.getItem("montantTotalAchat");

console.log(formulaireElementValue)
console.log(idProduitConfirm)


let recapAchat = document.querySelector('#recap_achat');

let recapAchatContent = `
<section>
        <div class="pphead">
            <div class="container">
               
                <div id ="recapa-head">
                    <P>KERNELMARKET</P> <P><i class="fas fa-phone-alt"></i> +225 0747492156</P>
                </div>
            </div>
        </div>    
            
        <div class="container" id = "recapContant">   
            <div id="adresse" class= "bloc">
                <div class="bloc_recap">
                    <i class="fas fa-check-circle"></i> <span>1.ADRESSE</span>
                </div>
                <p class="nom">${formulaireElementValue.nom}  </p>
                <p class="adresse">${formulaireElementValue.adresse}  </p>
                <p class="conatact">${formulaireElementValue.contact}  </p>


            </div>
            <div id="mode_de_livrason" class= "bloc">
                <div class="bloc_recap">
                <i class="fas fa-check-circle"></i> <span>2.MODE DE LIVRISON</span>
                </div>
                
            </div>
            <div id="mode_de_paiement" class= "bloc">
                <div  class="bloc_recap">
                <i class="fas fa-check-circle"></i> <span>3.MODE DE PAIMENT</span>
                </div>

            </div>
            <div id="recap-remercie" class= "bloc">
                <div   class="bloc_rec remeciementContent ">
                    <p>Votre commande <br> N°<span class="id_commande">${idProduitConfirm}</span> <br>à bien été prise en compte. <br>Le montant Total est de <span class="montanttt_commande">${montantTotalAchat}Fcfa </span> <br> Merci et à bientot.</p>
                </div>

            </div>
         </div>
     </section>

`
recapAchat.innerHTML = recapAchatContent;


















let remeciementContent =  document.querySelector('.bloc_rec.remeciementContent')
let remeciementContentP =  document.querySelector('.bloc_rec.remeciementContent > p')

let container = document.querySelectorAll('.container');
let ppHead = document.querySelector('.pphead');
let blocRecap = document.querySelectorAll('.bloc_recap')
let blocRecap_i = document.querySelector('.bloc_recap > i')
let blocRecap_span = document.querySelectorAll('.bloc_recap > span')
let montantttCommande = document.querySelector('.montanttt_commande');

let recapContant = document.querySelector('#recapContant')
let recapaHead = document.querySelector('#recapa-head');
let bloc = document.querySelectorAll('.bloc');
let recap_remercie = document.querySelector('#recap-remercie');
let idCommande = document.querySelector('.id_commande');
let nom = document.querySelector('.nom')
// STYLING OF PAGE CONFIRMATION

recapAchat.style.backgroundColor = "#EAFCF0";
recapAchat.style.fontFamily = "'Poppins', sans-serif";

container.forEach((elem)=>{
    elem.style.width = "50%";
elem.style.margin = "auto";
})
container.forEach((elem)=>{
    elem.style.width = "50%";
elem.style.margin = "auto";
})
blocRecap.forEach((elem)=>{
    elem.style.backgroundColor = "#fff"
    elem.style.height = "3rem"
    elem.style.marginTop = "10px";
    elem.style.display = "flex";
    elem.style.alignItems = "center";
    elem.style.paddingLeft = "5PX";
    elem.style.borderBottom = "1px solid #999";

})
bloc.forEach((elem)=>{
    elem.style.backgroundColor = "#fff";
    elem.style.padding = "5PX";
    elem.style.marginTop = "8PX";


})

blocRecap_i.style.color = 'green'

blocRecap_span.forEach((elem)=>{
    elem.style.marginLeft = "9px";
})

remeciementContent.style.display = "flex";
remeciementContent.style.alignItems = "center";
remeciementContent.style.justifyContent = "center";

remeciementContentP.style.textAlign = "center"



recapContant.style.marginTop = "20px"
ppHead.style.backgroundColor = "#fff"

recap_remercie.style.padding = "10PX"

recapaHead.style.display = "flex";
recapaHead.style.justifyContent = "space-between";

nom.style.fontWeight = "700"

idCommande.style.color = "crimson"
idCommande.style.fontWeight = "700"

montantttCommande.style.color = "crimson";
montantttCommande.style.fontWeight = "700";



