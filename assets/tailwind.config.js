module.exports = {
    purge: {
        enabled: true,
        content: ['../core/templates/**/*.html'],
    },
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            montserrat: ['Montserrat'],
        },

        extend: {
            colors: {
                blue: {
                    default: '#132C54',
                    bluish: '#2683c6'
                },
                red: {
                    default: '#F14A50'
                },
                grey: {
                    default: '#E9E8ED',
                    background: '#d2d2d2e0',
                    light: '#828282',
                    dark: "#757575"
                },
                cyan: {
                    light: '#95d8e2',
                    default: '#64d0e0',
                    middle: '#42ccca'
                },
            }
        }
    },
    variants: {},
    plugins: []
}
