/**
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('Click event function', () => {
    let mockCallback
    let js
    beforeEach(()=>{
        document.documentElement.innerHTML = html.toString();
        mockCallback = jest.fn(x => 5 + x)
    })
    afterEach(() => {
        document.documentElement.innerHTML = '';
    });
    it('passes value to function callback', () => {
        js = require('../mock')
        js.onClickEvent(10,mockCallback)
        expect(mockCallback.mock.calls[0][0]).toBe(10);
    });
    it('executes the callback function', () => {
        js = require('../mock')
        js.onClickEvent(10,mockCallback)
        expect(mockCallback.mock.results[0].value).toBe(15);
    });
});
