/* --
    -- Nom rédacteur : Franck Souverain MAZIKOU
    -- Nom fichier : Monnaie.js
    -- Date rédaction : 22/08/2021
-- */

// -- variable globale -- //
const valeurDeBaseEuro = 650;
const valeurDeBaseDollar = 550;

// -- fonctions de conversion -- //
function cfaEuro() {
    var prixCfa = prompt("Entrez un prix en CFA : ");

    if(prixCfa == "") {
        // -- erreur -- //
        console.error("Champ non saisi");
        alert("Aucun prix saisi.");
    }else {
        // -- affichage -- //
        alert("CFA/EURO : " + (prixCfa/valeurDeBaseEuro) + " EURO");
    }
}

function euroCfa() {
    var prixEuro = prompt("Entrez un prix en EURO : ");

    if(prixEuro == "") {
        // -- erreur -- //
        console.error("Champ non saisi");
        alert("Aucun prix saisi.");
    }else {
        // -- affichage -- //
        alert("EURO/CFA : " + (prixEuro*valeurDeBaseEuro) + " CFA");
    }
}

function dollarCfa() {
    var prixDollar = prompt("Entrez un prix en Dollar : ");

    if(prixDollar == "") {
        // -- erreur -- //
        console.error("Champ non saisi");
        alert("Aucun prix saisi.");
    }else {
        // -- affichage -- //
        alert("DOLLAR/CFA : " + (prixDollar*valeurDeBaseDollar) + " CFA");
    }
}