'use strict';

var hdlss = function () {
    function send(message) {
        console.debug(JSON.stringify({ recipient: 'hdlss', message: message }));
    }

    function getCookie(name) {
        return document.cookie.split('; ').reduce(function (r, v) {
            var parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, '');
    }

    return {
        ready: function ready() {
            send('ready');
        },
        error: function error() {
            send('error');
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
