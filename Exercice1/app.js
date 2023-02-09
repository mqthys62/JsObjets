// Exercice 1

class Car {
    constructor(voiture, marque, year) {
        this.voiture = voiture;
        this.marque = marque;
        this.year = year;

        this.conduire = function () {
            return (`La voiture ${this.voiture} de marque ${this.marque} de l'année ${this.year} roule sur la route.`);
        };
    }
}

let voiture = new Car('Camry', 'Toyota', '2020');
console.log(voiture.conduire());

let voiture2 = new Car('RSQ8', 'Audi', '2022');
console.log(voiture2.conduire());
//Exercice 2

let garage = {
    voiture,
    voiture2
}

garage.afficherVoitures = function () {
    console.log(garage);
}

garage.afficherVoitures();

// Exercice 3

class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;

        this.sePresenter = function () {
            return (`Bonjour je m'appelle ${nom} et j'ai ${age} ans.`);
        };
    }
}

let personne = new Personne('John', '30');
console.log(personne.sePresenter());

// Exercice 4

class Etudiant extends Personne {
    constructor(nom, age, matricule) {
        super(nom, age)
        this.matricule = matricule;
        this.etudier = function () {
            return (`L'étudiant ${nom} avec le matricule ${matricule} étudie pour son examen`);
        };
    }
}

let etudiant1 = new Etudiant('Jane', '22', '123456');
console.log(etudiant1.sePresenter());
console.log(etudiant1.etudier());
