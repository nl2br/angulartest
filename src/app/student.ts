export class Student {
    id:number
    nomDeClasse: string
    nom: string
    prenom: string
    age: number
    email: string
    filiere: string
    description: string

    constructor(id:number, nom: string, prenom: string, age: number, filiere: string, nomDeClasse: string, description: string){
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.filiere = filiere
        this.nomDeClasse = nomDeClasse
        this.description = description
    }
};

// export const students = [
//     new Student(1,'arnorld','Etwillie', 34, 'S', 'Classe 1', 'abruti'),
//     new Student(2,'émile','Labille', 16, 'S', 'Classe 1', 'abruti'),
//     new Student(3,'coquille','St Jacques', 14, 'S', 'Classe 1', 'abruti'),
//     new Student(4,'louis','Futon', 56, 'S', 'Classe 1', 'abruti')
// ];