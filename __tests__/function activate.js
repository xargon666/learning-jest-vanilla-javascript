class Turret {
    constructor(ammo = 50) {
        this._ammo = ammo
    }

    get ammo() {
        return `Current Ammo Count: ${this._ammo}`
    }
    set ammo(val) {
        if (typeof (val) !== 'number') {
            throw 'Error: Ammo value must be number'
        }
        this._ammo = val
    }
    reload(){
        return this.ammo = 100
    }
}

const turret1 = new Turret()

console.log({ turret1 })

turret1.reload()

console.log({ turret1 })

class Person {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name
    }
    set name(newName) {
        newName = newName.trim()
        if (newName === '') {
            throw 'Name cannot be blank'
        }
        this._name = newName;
    }
}

const p1 = new Person('Dave')
console.log(p1)
p1.name = 'Chris'
console.log(p1.name)
