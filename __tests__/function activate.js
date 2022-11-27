function activate(turret) {
    if (!turret.status) {
        console.error("turret missing status property")
        return
    }
    turret.status === "Safe" && (turret.status = "Armed")
}

turret1 = {
}

activate(turret1)

console.log({turret1})
