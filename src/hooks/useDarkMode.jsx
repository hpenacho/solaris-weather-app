import { useEffect, useState } from 'react'
import darkTheme from '../assets/darkTheme'
import lightTheme from '../assets/lightTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

const useDarkMode = () => {

    const [theme, setTheme] = useState(darkTheme)
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });

    useEffect(() => {
        const userTheme = window.localStorage.getItem('theme')

        userTheme ?
            userTheme === 'dark' ? setTheme(darkTheme) : setTheme(lightTheme)
            :
            prefersDarkMode ? setTheme(darkTheme) : setTheme(lightTheme)
        window.localStorage.setItem('theme', prefersDarkMode ? 'dark' : 'light')

    }, [prefersDarkMode])

    return [theme, setTheme]
}

export default useDarkMode;