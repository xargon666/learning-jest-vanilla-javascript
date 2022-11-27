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
    reload() {
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


const turretObject = {
    name: "Bob",
    targets: [],
}
function addTarget(turret, x, y, z) {
    turret.targets.push({ x: x, y: y, z: z })
}

let enemyPosition = { x: 10, y: 0, z: 10 }
addTarget(turretObject, enemyPosition.x, enemyPosition.y, enemyPosition.z)
console.log(turretObject)

console.log("hello world")
console.log("hello world")

const orders = [
    {
        orderId: "123",
        items: [{
            productId: "456"
        },
        {
            productId: "457"
        }
    ]
    },
    {
        orderId: "124",
        items: [{
            productId: "999"
        }]
    },
    {
        orderId: "125",
        items: [{
            productId: "666"
        }]
    }
]
console.log(orders[0])
const output = orders.find((o) => o.orderId === "123")
console.log(output)
