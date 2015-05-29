window.CustomException = (function () {
    'use strict';
    /**
     * Custom exception.
     * 
     * @param {string} message Error message.
     */
    function CustomException(message) {
        this.message = message;
    }
    CustomException.prototype = Object.create(Error.prototype, {name: {value: 'CustomException'}});
    CustomException.prototype.constructor = CustomException;

    return CustomException;
})();

window.addClassOnElement = (function (CustomException) {
    'use strict';

    return function (el, newClass) {
        if (!(el instanceof HTMLElement)) {
            throw new CustomException('the first argument must be an HTMLElement');
        }

        el.classList.add(newClass);
    };
})(window.CustomException);