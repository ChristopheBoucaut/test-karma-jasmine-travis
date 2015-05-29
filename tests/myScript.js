'use strict';

describe('My Script', function() {
    it('should throw an error', function() {
        function addTheBadClass() {
            window.addClassOnElement('ee');
        }
        expect(addTheBadClass).toThrowError(window.CustomException);
    });
});