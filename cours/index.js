const h3js = document.getElementById("javascript");
const h3 = document.querySelectorAll("h3");

let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[1][2]);

let array2 = ["Bordeaux", 24, true, [1,2], {nom: "Denis"}];
// console.log(array2[4].nom);

let objet = {
    pseudo: "Denis",
    age: 33,
    techno: ["Javascript", "React", "NodeJs"],
}
// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
    {
        pseudo: "Denis",
        age: 33,
        techno: ["Javascript", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        techno: ["CSS", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age: 42,
        techno: ["php", "React", "NodeJs"],
        admin: true,
    }
]
// afficher le pseudo de nikola
// console.log(data[2].pseudo);

// -----------------------------------------
// Les structures de controle
if(data[0].age > data[1].age) {
    // console.log(data[1].pseudo + " est moins agé que " + data[0].pseudo);
}else {
    // console.log(data[0].pseudo + " est plus agé " + data[1].pseudo);
}

// while (tant que)
let w = 0;
while (w < 10) {
    w++;
    // console.log("La valeur de w est de : " + w);
}

// Do while (Faire tant que)
let d = 0;
do {
    d++;
    // console.log("La valeur de w est de : " + d);
}
while (d < 5);

// Les boucles for
 for(const usser of data) {
    // document.body.innerHTML += `<li>${usser.pseudo} - ${usser.age}</li>`
 }

 for(i = 0; i < data.length; i++) {
    // console.log(data[i]);
 }

 document.body.addEventListener("click", (e) => {
    console.log(e.target.id);
    // if(e.target.id === "php") {
    //     document.body.style.background = "green";
    //     document.body.style.color = "white";
    // }

    // Switch
    switch(e.target.id) {
        case "javascript" :
            document.body.style.background = "yellow";
            document.body.style.color = "blue";
            break;
        case "php" :
            document.body.style.background = "skyBlue";
            document.body.style.color = "green";
            break;
        case "python" :
            document.body.style.background = "red";
            document.body.style.color = "white";
            break;
            default: document.body.style.color = "black";
    }
 });

//  Methodes String
let string2 = "Javascript est unn langage orienté objet";
console.log(eval(parseInt("1") + 2)); // affichera 3

// Methodes Numbers
let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

console.log(number2.toFixed(2)); // garde 2 chiffre apres la virgule.
console.log(parseInt(numberString)); // garde le premier nombre dans une chaine de caractere donc 42 ici
console.log(parseFloat(numberString)); // garde le nombre entier dans une chaine de caractere donc 42.12 ici

// Math
console.log(Math.round(4.5)); // arrondit au nombre le plus proche donc ici il affiche 5
console.log(Math.floor(4.9)); // arrondit au nombre inferieur quoi qu'il arrive donc ici il affiche 4
console.log(Math.ceil(4.1)); // arrondit au nombre superieur quoi qu'il arrive donc ici il affiche 5
console.log(Math.pow(2, 7)); // pour faire la puissance donc ici 2 puissance 7
console.log(Math.sqrt(16)); // pour faire la racine carrée donc ici 4
console.log(Math.floor(Math.random() * 50)); // pour avoir un nombre aleatoire en entier ici en 0 et 50

// Methodes array
let array3 = ["Java", "PHP", "CSS"];
let array4 = ["HTML", "Ruby"];
// concat permet de fusionner les tableaux
let newArray = array3.concat(array4);
console.log(newArray);
// Les trois-points permet egalement de fusionner les tableaux
let newArray2 = [...array3, ...array4]
console.log(newArray2);

console.log(array3.join(" "));

// IMPORTANT (très utile) //

let arrayNumber = [4, 74, 28, 12, 1];
// Si on veut additionner tout les element d'un tableaux
console.log(arrayNumber.reduce((x, y) => x + y));

// FILTER, SORT, MAP
console.log(arrayNumber.filter((number) => number > 10)); // Permet de filtrer les element du tableau donc ici affiche les elements superieur à 10

console.log(arrayNumber.sort((a, b) => a - b)); // Organise les elements dans l'ordre croissant

console.log(arrayNumber.sort((a, b) => b - a)); // Organise les elements dans l'ordre decroissant

arrayNumber.map((number) => console.log(number)); // Peut etre utliser pour lister tout les elements du tableau

// Methodes Objects
// Pour ranger parfaitement nos utilisateur on peut faire

document.body.innerHTML = data.sort((a,b) => b.age - a.age).map((user) => `
    <div class = "user-card">
        <h2>${user.pseudo}</h2>
        <p>${user.age} ans</p>
        <p>Statut : ${user.admin ? "Administrateur" : "Membre"}</p>
    </div>
`).join("");

// Les Dates //
// Date classique
let date = new Date();
console.log(date); // affiche l'heure actuel sur la machine

// Timestamp
let timestamp = Date.parse(date);
console.log(timestamp); // affiche le nombre de seconde ecoulé depuis 1970 à aujourd'hui

// IsoString
let iso = date.toISOString(); // affiche l'heure au complet

// Function pour formater l'heure afficher par l'isostring
function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
    return newDate;
}

console.log(dateParser(date));

// Destructuring (création de variable qui nous permet d'acceder facilement aux tableaux) //
let moreData = {
    destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData; // cet ecriture nous evite à chaque fois d'ecrire moreData.destvar pour accèder au tableau
console.log(destVar); // on accède au tableau juste avec le nom destVar

// Autres façon de destructuré

let array5 = [70, 80, 90];
let [x, y, z] = array5; // x y z prend respectivement les valeurs contenant dans l'array5
console.log(x, y, z);

// Function de destructuration
const dateDestructuring = (chaine) => {
    let newDate = chaine.split("T")[0]; // On prend la chaine et on casse partout ou il y'a T 
    let [y, m, d] = newDate.split("-"); // On attribue dans des variables et on casse partout ou il y'a un tiret(-)
    return [d, m, y].join("/"); // On formate la date et on join avec une barre(/)
}
console.log(dateDestructuring(iso));

// les Datasets //
// Pour acceder au langue
console.log(h3js.dataset.lang);

// Acceder à toutes les langues
h3.forEach((language) => console.log(language.dataset.lang));

// Les Regex
let mail = "from_scratch23@gmail.com";
// Pour tester on lui demande de trouver "from"
console.log(mail.search(/from/)); // elle renvoi 0, quand elle l'aura trouver et -1 quand elle ne l'a pas trouver.

// Pour chercher un element et la remplace par un autre
 console.log(mail.replace(/from/, "de"));

// L'importance du "i" au niveau de la comparaison
console.log(mail.match(/SCratch/i)); // ça renvoi true parce-que le i permet d'ignoré la difference entre majuscule et miniscule

// On peut chercher un caractere entre plusieurs
console.log(mail.match(/[zug]/)); // et la il va trouver le "g"

// Pour checker si il y'a un chiffre
console.log(mail.match(/\d/)); // le \d signifi tout les chiffres

// Et pour toutes les lettres
// On test si il y'a une lettre qui est tapez en faisant
console.log(mail.match(/[a-z]/));

// Pour controler un mail
// Regex pour email
console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

// Pour les separateur du milieu
const inputString = "123456789";
const regex = /.{1,3}/g;
const result = inputString.match(regex).join(" ");
console.log(result);

// Autres methodes
let separator = 265264849;
console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
