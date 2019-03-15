class Player {
    categorie: string
    hp: number
    atk: number
    mp: number
    range: number
    x: number
    y: number
    alive:boolean

    fight(categorie: string){
        console.log(`je suis un ${categorie}`)
    }
}

export class Warrior extends Player {
    fight(){
        super.fight('Warrior')
    }
}

export class Thief extends Player {
    fight(){
        super.fight('Thief')
    }
}

export class Mage extends Player {
    fight(){
        super.fight('Mage')
    }
}

export class Hunter extends Player {
    fight(){
        super.fight('Hunter')
    }
}

let hunter = new Hunter()
hunter.fight()
