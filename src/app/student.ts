export class Student {
    nomDeClasse: string
    nom: string
    prenom: string
    age: number
    filière: string
    description: string

    constructor(nom: string, prenom: string){
        this.nom = nom
        this.prenom = prenom
    }
}