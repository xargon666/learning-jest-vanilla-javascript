/**
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Button1 click ', () => {
    let js
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        js = require('../script')
    })
    afterEach(() => {
        document.getElementsByTagName('html')[0].innerHTML = '';
    });
    it('changes output content', () => {
        const myButton1 = document.getElementById('button-test1')
        const output = document.getElementById('output')
        const outputBefore = output.textContent
        myButton1.click()
        const outputAfter = output.textContent
        expect(outputBefore).not.toBe(outputAfter)
    });
});
describe('Button2 click ', () => {
    let js
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        js = require('../script')
    })
    afterEach(() => {
        document.getElementsByTagName('html')[0].innerHTML = '';
    });
    it('changes background colour', () => {
        const myButton2 = document.getElementById('button-test2')
        const body = document.querySelector('body')
        const bodyBefore = body.style.backgroundColor
        console.log(body)
        console.log("bodyBefore",bodyBefore)
        myButton2.click()
        const bodyAfter = body.style.backgroundColor
        console.log("bodyAfter",bodyAfter)
        expect(bodyBefore).not.toBe(bodyAfter)
    });
});
