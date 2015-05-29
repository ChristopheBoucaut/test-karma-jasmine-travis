'use strict';

describe('My Script', function() {
    it('should throw an error', function() {
        expect(window.addClassOnElement('ee')).toThrowError(window.CustomException);
    });
});