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