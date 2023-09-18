import { Config, sanitize } from 'isomorphic-dompurify'

const plugin = {
    name: 'dompurify',
    type: 'postProcessor',

    options: {
        ALLOWED_TAGS: ['a', 'b', 'br', 'code', 'em', 'i', 'li', 'ol', 'p', 'strong', 'ul'],
        ALLOWED_ATTR: ['style']
    },

    setOptions(options: Config) {
        this.options = {...this.options, ...options};
    },

    process (value: string) {
        return sanitize(value, this.options)
    }
}

export default plugin
