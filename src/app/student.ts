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
}