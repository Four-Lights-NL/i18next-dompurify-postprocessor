import DOMPurify from 'dompurify'

const plugin = {
    name: 'dompurify',
    type: 'postProcessor',

    options: {
        ALLOWED_TAGS: ['a', 'b', 'br', 'code', 'em', 'i', 'li', 'ol', 'p', 'strong', 'ul'],
        ALLOWED_ATTR: ['style']
    },

    setOptions(options: DOMPurify.Config) {
        this.options = {...this.options, ...options};
    },

    process (value: string) {
        return DOMPurify.sanitize(value, this.options)
    }
}

export default plugin
