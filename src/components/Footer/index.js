import { FooterContainer, FooterLink, FooterText } from "./styles";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                Powered by
            </FooterText>
            <FooterLink href="http://pokeapi.co" target="_blank" rel="noopener noreferrer">
                Poké Api
            </FooterLink>
        </FooterContainer>
    );
}

export default Footer;