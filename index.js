const hdlss = (function () {
    function send(message, params = {}) {
        console.debug('__hdlss__', JSON.stringify({message, params}))
    }

    function getCookie(name) {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=')
            return parts[0] === name ? decodeURIComponent(parts[1]) : r
        }, '')
    }

    return {
        ready(params) {
            send('ready', params)
        },

        error(params) {
            send('error', params)
        },

        getEnv(name) {
            const env = JSON.parse(getCookie('hdlss_env') || '{}')
            if (name !== undefined) {
                return env[name]
            }
            return env
        },
    }
})()
