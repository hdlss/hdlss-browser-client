const hdlss = (function () {
    function send(message) {
        console.debug(JSON.stringify({recipient: 'hdlss', message}))
    }

    function getCookie(name) {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=')
            return parts[0] === name ? decodeURIComponent(parts[1]) : r
        }, '')
    }

    return {
        ready() {
            send('ready')
        },

        error() {
            send('error')
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
