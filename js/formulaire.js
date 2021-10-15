//  import { saveProduitInLocalStorage } from "./panier.js";
 
 const inputs = document.querySelectorAll('.input');

 function focusFunc(){
     let parent = this.parentNode.parentNode;
     parent.classList.add('focus');
 }
 function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})



const sendForm = document.querySelector('#sendForm');
const nom = document.querySelector('#nom');
const adresse = document.querySelector('#adresse');
const email = document.querySelector('#email');
const codepostal = document.querySelector('#codepostal');
const contact = document.querySelector('#contact');


sendForm.addEventListener('click', (e)=>{
    e.preventDefault();
    // enregistrement des valeurs du formulaire dans un object formulaire Element

        const formulaireElementValues = {
            nom: nom.value,
            adresse: adresse.value,
            email: email.value,
            codepostal: codepostal.value,
            contact: contact.value
        
        }


        
        const regexNomVille = (value)=>{
                return /^[A-Za-z\s]{3,20}$/.test(value);// LE CONTENUE DE VALUE PEUT ETRE UNE MAJUSCULLE ou minuscrule et comprise entre 3 et 20
        }
        const regexadresse = (value)=>{
            return /^[A-Za-z0-9\s]{3,20}$/.test(value);// LE CONTENUE DE VALUE PEUT ETRE UNE MAJUSCULLE ou minuscrule et comprise entre 3 et 20
    }

        const regexContact = (value)=>{
            return /^[0-9]{12}$/.test(value);// LE CONTENUE DE VALUE PEUT ETRE uniquement de   12 chiffres
            }

            const regexEmail = (value)=>{
                return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(value);// LE CONTENUE DE VALUE PEUT ETRE uniquement de   5 chiffres
            }
  
        const regexCodePostal = (value)=>{
            return /^[0-9]{5}$/.test(value);// LE CONTENUE DE VALUE PEUT ETRE uniquement de   5 chiffres
        }


        //function pour vider et remplir le panier

        function spanContentVide(elem){
            document.querySelector(`.${elem}`).textContent = "";
        }
        function spanContentRempli(elem){
            document.querySelector(`.${elem} `).textContent = "svp renseignez bien le champ ";
        }

// function de control de la valeur mise dans le champ nom

        function nomControl(){
            let leNom = formulaireElementValues.nom;
            if(regexNomVille(leNom)){
                spanContentVide("hnom");
                alert("TRUE nom")
                return true;
            }
            else{
                spanContentRempli("hnom");
                alert("FALSE nom")
                return false;
            }
        }
// function de control de la valeur mise dans le champ ville
        
        function adresseControl(){

            let ladresse = formulaireElementValues.adresse

            if(regexadresse(ladresse)){
                spanContentVide("hadresse")
                alert("TRUE adresse")

                return true;
            }
            else{
                spanContentRempli("hadresse")
                alert("FALSE adresse")
                return false;

            }
        }

        

        // function de control de la valeur mise dans le champ Email

        function EmailControl(){
            let leMail = formulaireElementValues.email;
            if(regexEmail(leMail)){
                spanContentVide("hemail")
                alert("TRUE mail")
                return true;
            }
            else{
                spanContentRempli("hemail");
                alert("FALSE mail");
                return false;
            }
        }

// function de control de la valeur mise dans le champ codepostal


        function codePostal(){
            let leCodepostal = formulaireElementValues.codepostal;
            if(regexCodePostal(leCodepostal)){
                spanContentVide("hcodep");
                alert("TRUE cpt");
                return true;
            }
            else{
                spanContentRempli("hcodep");
                alert("FALSE cpt");
                return false;
            }
        }
// function de control de la valeur mise dans le champ contact

        function contactControl(){
            let leContact = formulaireElementValues.contact;
            if(regexContact(leContact)){
                spanContentVide("hcontact");
                alert("TRUE contact");
                return true;
            }
            else{
                spanContentRempli("hcontact");
                alert("FALSE contact");
                return false;
            }
        }

        
        
       

    //envoyer l'object formulaire dans le localStorage

            if (nomControl() && adresseControl() && contactControl() && codePostal()  && EmailControl() ){
                    
                localStorage.setItem('formulaireElementValue', JSON.stringify(formulaireElementValues));

                
            let saveProduitInLocalStorage = JSON.parse(localStorage.getItem('produit'));
            
            const sendToServer = {
                formulaireElementValues,
                saveProduitInLocalStorage
            }
        console.log("sendToServer")

        console.log(sendToServer)
        envoieVersServeur(sendToServer)
       
           
            }else{
                alert("veillez bien rempli les champs");
            }




            

})

function envoieVersServeur(sendToServer){
     /*
        Grace a l'object "promise " on ne bloque pas l'interpreteur JvaScript lors de l'execution du programme
        ---> lorsque l'on du code aynchrone, celui ci nous retouner une "promesse" qu'un resultacst nous sera envoyé prochainement 
        ---> une promesse estre "resolve"(on obtient un resultat favorable ) ou reject ( dans ce cas on a une erreur)
        ----> pour recupere une promesse on peut utiliser la methode "then()" des que la promesse est resolue et  la methode "catch()" pur executer du code des une erreure ce presente
        */

        let promise1 =fetch("https://restapi.fr/api/commandeTest",{
                    method : "POST",
                    body : JSON.stringify(sendToServer),
                    headers : {
                        "Content-Type": "application/json",
                    },
            });
            console.log("promise1");

            console.log(promise1);

            // pour voir le resultat du serveur dans la console
            promise1.then(async(Response)=>{
                try{
                    console.log("Response")
                    console.log(Response)

                    let contenue = await Response.json()
                    console.log("contenue")
                    console.log(contenue)
                    let idProduitConfirm = contenue._id;
                    localStorage.setItem("idProduitConfirm",idProduitConfirm)
                    console.log(idProduitConfirm)
                    window.location.href = "confirmAchat.html"

                    if(Response.ok){
                        alert(`Resultat de la reponse.ok ${Response.ok}`)
                    }else{
                        alert(`probleme lié au serveur ${Response.status}`)

                    }

                }catch(e){
                    console.log(e)
                    alert(` erreure qui vient du catch(): ${e} `);
                }
            } )

            
}

// let thetest =  JSON.parse(localStorage.getItem("formulaireElementValues"));

// console.log(thetest)

// function staticValues(input){
//     document.querySelector(`#${input}`).value = thetest.input;
// }

// staticValues("nom");
// staticValues("adresse");
// staticValues("email");
// staticValues("codepostal");
// staticValues("contact");

