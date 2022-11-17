const myButton = document.getElementById('button-test2')
myButton.addEventListener('click', () => onClickEvent("button2",popup))
let count = 0

function onClickEvent(prop,callback) {
    count++
    console.log(`button clicked ${count} times`)
    callback(prop)
}

function popup(str){
    const msg = `you have clicked ${str}`
    window.alert(msg)
}

module.exports = {onClickEvent}
