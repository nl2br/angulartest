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
    new Student('arnorld','etwillie', 16, 'S', 'Classe 1', 'abruti'),
    new Student('émile','labille', 16, 'S', 'Classe 1', 'abruti'),
    new Student('coquille','stjacques', 16, 'S', 'Classe 1', 'abruti'),
    new Student('louis','futon', 16, 'S', 'Classe 1', 'abruti')
];