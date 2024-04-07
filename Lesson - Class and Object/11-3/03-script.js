class ItsMePrince{
    constructor(name){
        this._name = name
    }
    printName()
    {
        console.log(`Hello my name is ${this.name}`)
    }
    get name() 
    {
        return this._name
    }
    set name(NewName)
    {
        this._name = NewName
    }
}

const Uvaish = new ItsMePrince("uvaish")
Uvaish.printName()
console.log(Uvaish.name)
Uvaish.name = "Prince"
Uvaish.printName()
console.log(Uvaish.name)