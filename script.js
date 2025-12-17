fetch("menuiserie.json")
    .then(rep => rep.json())
    .then(menuiserie => {
        console.log(menuiserie)
        afficher(menuiserie)
        afficherRealisations(menuiserie)

    })

function afficherRealisations(menuiserie){
    let realisations =[""]
    menuiserie.realisations.forEach(realisation => {realisations+=`<img src="${realisation.imageUrl} width="33%">
                        <h4>${realisation.titre}</h4>
                        <p>${realisation.decription}</p>`

            
        });
}

function afficherTemoignages(menuiserie){
    let temoignages=[""]
    menuiserie.temoignages.forEach(temoignage => {temoignages+=`<div>
                    <h5>${temoignage.prenom}</h5><i class="ph-fill ph-star"></i><p>${temoignage.typePrestation}</p>
                </div>
                <p>${temoignage.note}</p>
                <p>
                    ${temoignage.commentaire}
                </p>`

            
        });
}


function afficher(menuiserie){
        
        

        //ici faut faire des for each pour valeurs, réalisations et temoignages

        
        
        

//SECTION HERO
        document.getElementById("sectionhero").innerHTML += `<div class="align-center place">
                <img src="bobois-menuisier.png" class="align-center bg-blanc" width="30%">
                <h1>${menuiserie.propositionDeValeur}</h1>
            </div>`

//SECTION 1 (il reste à ajouter les for each)

        document.getElementById("section1").innerHTML+=`
        
        <h2>Nos réalisations</h2>

            <div class="space-evenly"> <!-- DIV PARENT PREMIER GROS CADRE -->

                <div class="flex space-evenly"> <!-- DEUX CADRES A GAUCHE -->

                    <div class="w33 cadre-real flex"><!-- UN CADRE A GAUCHE EN HAUT -->
<!--Faire boucle for Each pour les cadres comme ça -->
                        ${realisations[0]}
                    </div>
                    <div class="w33 cadre-real flex"><!-- UN CADRE A GAUCHE EN BAS -->
                    ${realisations[1]}

                    </div>

                </div>
                <!-- DEUX CADRES A DROITE -->
                <div class="flex space-evenly">
                    <div class="w33 cadre-real flex"><!-- CADRE A DROITE EN HAUT -->
                        ${realisations[2]}
                    </div>
                    <div class="w33 cadre-real flex"><!-- CADRE A DROITE EN BAS -->
                        ${realisations[3]}
                    </div>
                </div>


            </div>`

//SECTION 2 VALEURS (je crois ya un problème pour les icônes faudrait les rajouter dans le json, c'est un détail de fin de code mais avant le CSS)

        document.getElementById("section2").innerHTML+=`
         <!-- TITRE -->
            <h2>Nos valeurs</h2>

            <!-- DIV REGROUPE LES TROIS CADRES -->
            <div class="space-evenly flex align-center">
                <!-- VALEUR 1 -->
                <div class="cadre-val"><i class="ph-fill ph-pen-nib-straight"></i>
                    <p>
                    ${menuiserie.promessesClients[0]} </p>
                </div>
                <!-- VALEUR 2 -->
                <div class="cadre-val align-center">
                    <i class="ph-fill ph-log"></i>
                    <p>${menuiserie.promessesClients[1]}</p>
                </div>
                <!-- VALEUR 3 -->
                <div class="cadre-val align-center">
                    <i class="ph-fill ph-pencil-ruler"></i>
                    <p>${menuiserie.promessesClients[2]}</p>
                </div>

            </div>`

            //SECTION 3 TEMOIGNAGES (il reste les forEach pour chaque temoignages : prenom, type de prestation, note, description)

        document.getElementById("section3").innerHTML+=`
        <h2>Ils ont apprécié notre travail</h2>
        <div class="flex space-evenly">

            <!-- TEMOIGNAGE 1 -->
            <div class="cadre-tem">

                ${temoignages[0]}
            </div>

                <!-- TEMOIGNAGE 2 -->
            <div class="cadre-tem">

                ${temoignages[1]}

                <!-- TEMOIGNAGE 3 -->
            <div class="cadre-tem">

                ${temoignages[2]}

        </div>`
}
