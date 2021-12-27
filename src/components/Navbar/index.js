import React,{ useState, useEffect } from 'react'
import {Nav, NavbarContainer, NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'

const Navbar = ({ toggle }) => {
    
    const [scrollNav,setScrollNav]=useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>NKIKK</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='bio'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} >Home</NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks to='work'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
