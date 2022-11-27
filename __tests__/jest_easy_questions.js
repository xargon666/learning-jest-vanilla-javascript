// ============================================================
// toBe() Question
function activate(turret) {
    turret.status === "Safe" && (turret.status = "Armed")
    
describe('Turret Status', () => {
    test("activate method sets status to 'Armed'", () => {
        const turret1 = {status: "Safe"}
        activate(turret1)
        expect(turret1.status).____("Armed")
    })
})
describe('Turret Status', () => {
    test("activate method sets status to 'Armed'", () => {
        const turret1 = {status: "Safe"}
        activate(turret1)
        expect(turret1.status).toBe("Armed")
    })

// ============================================================
// not.toBe() Question

describe('Turret Status', () => {
    test("deactivate method sets status to 'Safe'", () => {
        turret.deactivate
        expect(turret.status).___.toBe("____")
    })
})
describe('Turret Status', () => {
    test("deactivate method sets status to 'Safe'", () => {
        turret.deactivate
        expect(turret.status).not.toBe("Safe")
    })
})

// ============================================================ 
// toEqual() Question
// toEqual can be used to compare objects.

describe('Compare Turrets',()=>{
    test("new turrest are the same as reloaded turrets",()=>{
        turret1.reload();
        const turret2 = new Turret();
        expect(turret1.ammo)._______(turret2.ammo)
    })

})

describe('Compare Turrets',()=>{
    test("new turrest are the same as reloaded turrets",()=>{
        turret1.reload();
        const turret2 = new Turret();
        expect(turret1.ammo).toEqual(turret2.ammo)
    })
})



// ============================================================
// toBeTruthy() Question
// used to test boolean expressions
describe('Target Aquisition',()=>{
    test('new targets are detected',()=>{
        turret1.targets = null
        let enemyPosition = {x: 10, y:0, z:10}
        turret1.activate
        expect(turret1.targets[0])._________()
    })
})
describe('Target Aquisition',()=>{
    test('new targets are detected',()=>{
        turret1.targets = null
        let enemyPosition = {x: 10, y:0, z:10}
        turret1.activate
        expect(turret1.targets[0]).toBeTruthy()
    })
})


// ============================================================
// toBeLessThan() question

describe('Turret Ammo', () => {
    test("count goes down", () => {
        let ammoCount = turret.Ammo
        turret.fire()
        let newAmmoCount = turret.Ammo
        expect(newAmmoCount).____________(ammoCount)
    })
})

describe('Turret Ammo', () => {
    test("count goes down", () => {
        let ammoCount = turret.Ammo
        turret.fire()
        let newAmmoCount = turret.Ammo
        expect(newAmmoCount).toBeLessThan(ammoCount)
    })
})
