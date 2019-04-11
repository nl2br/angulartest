export class Student {
    nomDeClasse: string
    nom: string
    prenom: string
    age: number
    filiere: string
    description: string

    constructor(nom: string, prenom: string, age: number, filiere: string, nomDeClasse: string, description: string){
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.filiere = filiere
        this.nomDeClasse = nomDeClasse
        this.description = description
    }
};

export const students = [
    new Student('arnorld','Etwillie', 19, 'S', 'Classe 1', 'abruti'),
    new Student('émile','Labille', 16, 'S', 'Classe 1', 'abruti'),
    new Student('coquille','St Jacques', 14, 'S', 'Classe 1', 'abruti'),
    new Student('louis','Futon', 15, 'S', 'Classe 1', 'abruti')
];