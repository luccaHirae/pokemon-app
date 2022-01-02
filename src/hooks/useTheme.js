import dark from "../styles/themes/dark"
import light from "../styles/themes/light"
import usePersistedState from "./usePersistedState"

const useTheme = () => {
    const [theme, setTheme] = usePersistedState('pdTheme', light)

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return { theme, toggleTheme }
}

export default useTheme