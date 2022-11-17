/**
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Button2 click', () => {
    let mockCallback
    let js
    beforeEach(()=>{
        document.documentElement.innerHTML = html.toString();
        js = require('../mock')
        mockCallback = jest.fn(x => 5 + x)
    })
    afterEach(() => {
        document.getElementsByTagName('html')[0].innerHTML = '';
    });
    it('passes value to function callback', () => {
        js.onClickEvent(10,mockCallback)
        expect(mockCallback.mock.calls[0][0]).toBe(10);
    });
    it('executes the callback function', () => {
        js.onClickEvent(10,mockCallback)
        expect(mockCallback.mock.results[0].value).toBe(15);
    });
});
