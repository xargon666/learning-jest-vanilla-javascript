/**
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
describe('Testing script.js', () => {
    beforeAll(() => {
        document.documentElement.innerHTML = html.toString();
        const js = require('../script')
    })

    test('Button click changes output content', () => {
        const myButton1 = document.getElementById('button-test1')
        const output = document.getElementById('output')
        const outputBefore = output.textContent
        myButton1.click()
        const outputAfter = output.textContent
        expect(outputBefore).toBe(outputAfter)
    });

    test('Button click changes background colour', () => {
        const myButton2 = document.getElementById('button-test2')
        const bodyBefore = document.body.style.backgroundColor
        console.log(bodyBefore)
        myButton2.click()
        const bodyAfter = document.body.style.backgroundColor
        expect(bodyBefore).not.toBe(bodyAfter)
    });

});
