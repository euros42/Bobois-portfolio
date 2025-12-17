fetch("menuiserie.json")
    .then(rep => rep.json())
    .then(menuiserie => {
        console.log(menuiserie)
        //      afficher(menuiserie)
        afficherHero(menuiserie)
        afficherRealisations(menuiserie)
        afficherValeurs(menuiserie)
        afficherTemoignages(menuiserie)
    })


// hero
//role: afficher le hero (h1 + btn)
//parametre : donnée (menuiserie.json)
//return : rien

function afficherHero(donee) {

    document.getElementById("sectionhero").innerHTML +=
        `<div class="align-center place">
                <img src="bobois-menuisier.png" class="align-center bg-blanc" width="30%">
                <h1>${donee.propositionDeValeur}</h1>
                <a class="btn">${donee.texteBouton}</a>
                <p>${donee.entreprise}</p>
        </div>
    `
}




// realisations

//afficher les réalisations
//paramètre : donnée(menuiserie.json)
//return : rien



function afficherRealisations(donnee) {
    donnee.realisations.forEach(realisation => {
        document.getElementById("section1").innerHTML += `
            <div class="flex cadre-real"data-aos="zoom-in-up">
                <img src="${realisation.imageUrl}" class="w30">
                <div class="w20">
                    <h4 class="petit-titre">${realisation.titre}</h4>
                    <p class="seize">${realisation.description}</p>
                </div>
            </div>
        `
    });


}


// valeurs
//afficher les valeurs
//paramètre : donnée(menuiserie.json)
//return : rien

function afficherValeurs(donnee) {
    document.getElementById("section2").innerHTML += `
         <!-- TITRE -->
            <h2>Nos valeurs</h2>

            <!-- DIV REGROUPE LES TROIS CADRES -->
            <div class="space-evenly flex align-center">
                <!-- VALEUR 1 -->
                <div class="cadre-val align-center" data-aos="flip-left">
                    <i class="ph-fill ph-pen-nib-straight icone icone"></i>
                    <p class="seize">${donnee.promessesClients[0]}</p>
                </div>
                <!-- VALEUR 2 -->
                <div class="cadre-val align-center"data-aos="flip-left">
                    <i class="ph-fill ph-log icone"></i>
                    <p class="seize">${donnee.promessesClients[1]}</p>
                </div>
                <!-- VALEUR 3 -->
                <div class="cadre-val align-center"data-aos="flip-left">
                    <i class="ph-fill ph-pencil-ruler icone"></i>
                    <p class="seize">${donnee.promessesClients[2]}</p>
                </div>

            </div>`
}


//commentaires
//fonction: Afficher les temoignages
//paramètre:donnee(menuiserie.json)
//retour:rien

function afficherTemoignages(donee) {
    donee.temoignages.forEach(temoignage => {
        document.getElementById("section3").innerHTML += `
        <div class="cadre-tem" data-aos="fade-up">
            <div class="w30 space-between flex">
                <h5 class="petit-titre">${temoignage.prenom}</h5> 
                <p class=seize>${temoignage.note}<i class="ph-fill ph-star"></i></p>
            </div>

            <div class="">
           <p class="gras seize">${temoignage.typePrestation}<p>
            <p class="seize space-between">${temoignage.commentaire}</p>
            </div>
        </div>`})
};



