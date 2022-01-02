import { useState } from "react";
import { HeaderButton, HeaderContainer, HeaderTitle, MoonIcon, SunIcon } from "./styles";

const Header = () => {
    const [isDark, setIsDark] = useState(false)

    return (
        <HeaderContainer>
            <HeaderTitle to="/" title="Poké Data">Poké Data</HeaderTitle>

            <HeaderButton onClick={() => setIsDark(prev => !prev)} title="toggle dark mode">
                {isDark ? <SunIcon /> : <MoonIcon />}
            </HeaderButton>
        </HeaderContainer>
    );
}

export default Header;