'use strict';

var hdlss = function () {
    function send(message) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        console.debug('__hdlss__', JSON.stringify({ message: message, params: params }));
    }

    function getCookie(name) {
        return document.cookie.split('; ').reduce(function (r, v) {
            var parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, '');
    }

    return {
        ready: function ready(params) {
            send('ready', params);
        },
        error: function error(params) {
            send('error', params);
        },
        getEnv: function getEnv(name) {
            var env = JSON.parse(getCookie('hdlss_env') || '{}');
            if (name !== undefined) {
                return env[name];
            }
            return env;
        }
    };
}();
