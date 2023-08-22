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
