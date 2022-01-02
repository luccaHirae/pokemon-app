import { HeaderButton, HeaderContainer, HeaderTitle, MoonIcon, SunIcon } from "./styles";

const Header = ({ theme, toggleTheme }) => {
    const handleClick = () => {
        toggleTheme()
    }

    return (
        <HeaderContainer>
            <HeaderTitle to="/" title="Homepage">Poké Data</HeaderTitle>

            <HeaderButton onClick={handleClick} title="toggle theme mode">
                {theme.title === 'dark' ? <SunIcon /> : <MoonIcon />}
            </HeaderButton>
        </HeaderContainer>
    );
}

export default Header;