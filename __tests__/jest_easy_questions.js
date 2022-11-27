// ============================================================
// toBe() Question

const data = {
    Description: "The toBe matcher tests exact equality. Useful for testing for if a specific value.",
    hint: "If you need hints at this point, you're in trouble dude.",
    failure: "Check you're spelling 'toBe' right!",
    Success: "Congratulations, you've passed the first jest. I mean test. Jest test."
}
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
    
    
    const data2 = {
        Description: "To return the opposite of matchers normal function, you can use the '.not' modifier.",
        hint: "Make sure you have your dots in a row.",
        failure: "Close! You were really close that time... not",
        Success: "Congratulations... not. No really, good job."
    }
    
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
    const data3 = {
        Description: "If you try testing exact object equality, you might run into some trouble using the .toBe matcher. You might also find yourself wanting to test multiple values through the same test (though I've never got that to work). Fear not, the 'toEqual' matcher comes to the rescue.",
        hint: "I couldn't make these tests toEqual easier.",
        failure: "toEqual is pretty much the answer here.",
        Success: ".toEqual() or .not.toEqual()... that's right, it was toEqual()."
    }
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
    const data4 = {
        Description: "If you need to test a boolean value, evaluate an expression or test if a variable has a value assigned or is null, there are a variety of specific matchers for this, including the toTruthy and toFalsy matchers.",
        hint: "Remember, if an array element exists, it evaluates to truthy.",
        failure: "Wrong matcher, try again.",
        Success: "It was true all along, you are the chosen one."
    }

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
    const data5 = {
        Description: "Testing greater/lesser or greater or equal to etc... couldn't be easier with the toBeGreaterThan() matcher and it's close relatives.",
        hint: "Concentrate, focus, picture the numbers in your mind. What is different about them? Wait... one of them is... something than the other!",
        failure: "Maybe you spelt it wrong, maybe you're just not cut out for this. Either way, I win.",
        Success: "Nobody is GreaterThan(you) at this game."
    }


    function fire(turret) {
        turret?.ammo > 0 && (turret.ammo -= 1)
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
    const data5 = {
        Description: "Sometimes you want to test that when a function produces an error, it produces the error you expect it to. Thats where toThrow() comes in.",
        hint: "We're looking for a specific matcher here... I might have mentioned it somewhere. You've probably got the hang of this by now.",
        failure: "How far can you throw your laptop?",
        Success: "You are the greatest throw sure."
    }
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
