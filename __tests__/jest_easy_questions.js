// ============================================================
// toBe() Question
function activate(turret) {
    turret.status === "Safe" && (turret.status = "Armed")
}
describe('Turret Status', () => {
    test("activate method sets status to 'Armed'", () => {
        const turret1 = { status: "Safe" }
        activate(turret1)
        expect(turret1.status).____("Armed")
    })
})
describe('Turret Status', () => {
    test("activate method sets status to 'Armed'", () => {
        const turret1 = { status: "Safe" }
        activate(turret1)
        expect(turret1.status).toBe("Armed")
    })

    // ============================================================
    // not.toBe() Question
    function deactivate(turret) {
        turret.status === "Armed" && (turret.status = "Safe")
    }

    describe('Turret Status', () => {
        test("deactivate method sets status to 'Safe'", () => {
            const turret1 = { status: "Armed" }
            deactivate(turret1)
            expect(turret.status).___.toBe("____")
        })
    })
    describe('Turret Status', () => {
        test("deactivate method sets status to 'Safe'", () => {
            const turret1 = { status: "Armed" }
            deactivate(turret1)
            expect(turret1.status).not.toBe("Safe")
        })
    })

    // ============================================================ 
    // toEqual() Question
    // toEqual can be used to compare objects.
    class Turret {
        constructor(ammo = 100) {
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

    describe('Compare Turrets', () => {
        test("new turrest are the same as reloaded turrets", () => {
            const turret1 = new Turret(0); // this turret has 0 ammo
            const turret2 = new Turret();
            turret1.reload() // reload!
            expect(turret1.ammo)._______(turret2.ammo)
        })
    })
    describe('Compare Turrets', () => {
        test("new turrest are the same as reloaded turrets", () => {
            const turret1 = new Turret(0); // this turret has 0 ammo
            const turret2 = new Turret();
            turret1.reload() // reload!
            expect(turret1.ammo).toEqual(turret2.ammo)
        })
    })

    // ============================================================
    // toBeTruthy() Question
    // used to test boolean expressions
    function addTarget(turret, x, y, z) {
        turret.targets.push({ x: x, y: y, z: z })
    }

    describe('Target Aquisition', () => {
        test('new targets are detected', () => {
            let turret1 = {}
            let enemy = { x: 10, y: 0, z: 10 }
            addTarget(turret1, enemy.x, enemy.y, enemy.z)
            expect(turret1.targets[0])._________()
        })
    })

    describe('Target Aquisition', () => {
        test('new targets are detected', () => {
            let turret1 = {}
            let enemy = { x: 10, y: 0, z: 10 }
            addTarget(turret1, enemy.x, enemy.y, enemy.z)
            expect(turret1.targets[0]).toBeTruthy()
        })
    })

    // ============================================================
    // toBeLessThan() question
    function fire(turret) {
        turret?.ammo -= 1
    }

    describe('Turret Ammo', () => {
        test("count goes down", () => {
            let turret = { ammo: 100 }
            let ammoCount = turret.ammo
            fire(turret)
            let newAmmoCount = turret.ammo
            expect(newAmmoCount).____________(ammoCount)
        })
    })

    describe('Turret Ammo', () => {
        test("count goes down", () => {
            let turret = { ammo: 100 }
            let ammoCount = turret.ammo
            fire(turret)
            let newAmmoCount = turret.ammo
            expect(newAmmoCount).toBeLessThan(ammoCount)
        })
    })

    // ==================================================================================================== 
    // toThrow
    class Turret {
        constructor(ammo = 100) {
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
    }

describe("turret",()=>{
    test("throws error for wrong type in set ammo method",()=>{
        const turret1 = new Turret()
        expect(turret1.ammo = "bullets").toThrow()
    })
})
