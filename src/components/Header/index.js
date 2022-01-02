import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/reducers/themeReducer";
import { HeaderButton, HeaderContainer, HeaderTitle, MoonIcon, SunIcon } from "./styles";

const Header = () => {
    const isDark = useSelector(state => state.theme)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(toggle())
    }

    return (
        <HeaderContainer>
            <HeaderTitle to="/" title="Homepage">Poké Data</HeaderTitle>

            <HeaderButton onClick={handleClick} title="toggle dark mode">
                {isDark ? <SunIcon /> : <MoonIcon />}
            </HeaderButton>
        </HeaderContainer>
    );
}

export default Header;