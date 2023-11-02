import {extendTheme} from 'native-base'

export const THEME = extendTheme({
    colors: {
        blue: {
            700: '#2e83cb',
            600: '#379DF1',
        },
        gray: {
            700: '#121214',
            600: '#202024',
            500: '#29292E',
            400: '#323238',
        },
        white: '#FFFFFF',
        red: {
            500: '#F75A68'
        }
    },
    fonts: {
        // heading: 'Roboto_700Bold',
        // body: 'Roboto_400Regular',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },
    sizes: {
        14: 56,
        33: 148
    }
})