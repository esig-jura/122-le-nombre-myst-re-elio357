/**
 * Jeu du nombre mystère
 * @author  Steve Fallet
 * @version 2.0
 * @since   2018-09-09 (date de création)
 */

'use strict';

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min - La borne minimale (incluse)
 * @param {number} max - La borne maximale (exclue)
 * @returns {number} - Le nombre aléatoire généré
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Constantes pour définir les bornes du nombre à deviner
const MIN = 1;
const MAX = 100;

// Variables de jeu
let nbMystere = tireNombre(MIN, MAX); // Génère le nombre mystère
let nbEssais = 0; // Compteur d'essais
let reponse = null; // Réponse de l'utilisateur
let message = `Le nombre à deviner est compris entre ${MIN} et ${MAX}.`; // Message initial affiché

console.log(nbMystere); // Affiche le nombre mystère dans la console (utile pour les tests)

// Boucle principale du jeu : continue jusqu'à ce que l'utilisateur trouve le bon nombre
do {
    // Demande à l'utilisateur de saisir un nombre via une boîte de dialogue
    // et convertit la saisie en entier avec parseInt()
    reponse = parseInt(prompt(message));
    nbEssais++; // Incrémente le nombre d'essais

    // Compare la réponse de l'utilisateur au nombre mystère
    // et met à jour le message en conséquence
    if(reponse > nbMystere) {
        message = 'C\'est moins !'; // Le nombre proposé est trop grand
    } else {
        message = 'C\'est plus !'; // Le nombre proposé est trop petit
    }

} while (reponse !== nbMystere); // Condition de fin : l'utilisateur a trouvé le bon nombre

// Affiche un message de félicitations avec le nombre d'essais utilisés
alert(`Bravo, vous avez trouvé en ${nbEssais} essai(s) !`);
