import { useEffect, useState } from 'react';
import { ArrowIcon, ButtonWrapper, ScrollButton } from './styles';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <ButtonWrapper>
            <ScrollButton title='scroll to top' isVisible={isVisible} onClick={scrollToTop}>
                <ArrowIcon aria-hidden='true' />
            </ScrollButton>
        </ButtonWrapper>
    );
}

export default ScrollToTop;