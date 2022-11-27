/**
* @jest-environment jsdom
*/
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
let js

beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    js = require('../script');
})

describe('Button1 click', () => {
    it('changes output content', () => {
        const myButton1 = document.getElementById('button-test1')
        const output = document.getElementById('output')
        const outputBefore = output.textContent
        myButton1.click()
        const outputAfter = output.textContent
        expect(outputBefore).not.toBe(outputAfter)
    });
});

describe('Button2 click', () => {
    it('changes background colour', () => {
        const myButton2 = document.getElementById('button-test2')
        document.body.style.backgroundColor = 'blue'
        const bodyBefore = document.body.style.backgroundColor
        myButton2.click()
        const bodyAfter = document.body.style.backgroundColor
        expect(bodyBefore).not.toBe(bodyAfter)
    });
});

