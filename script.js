const myButton1 = document.getElementById('button-test1')
const myButton2 = document.getElementById('button-test2')

myButton1.addEventListener('click', () => clickEvent1())
myButton2.addEventListener('click', () => clickEvent2())

function clickEvent1() {
    console.log("clickEvent1")
    const element = document.getElementById('output')
    if (element.textContent === "") element.textContent = "Hello World"
}

function clickEvent2() {
    console.log("clickEvent2")
    if (document.body.style.backgroundColor != 'red') document.body.style.backgroundColor = 'red'
}
