import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarLink,SidebarWapper,SidebarMenu } from './SidebarElement'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWapper>
                <SidebarMenu>
                    <SidebarLink to="bio" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                        Home
                    </SidebarLink>
                    <SidebarLink to="work" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                        Works
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWapper>
        </SidebarContainer>
    )
}

export default Sidebar
