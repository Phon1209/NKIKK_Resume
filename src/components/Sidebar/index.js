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
                    <SidebarLink to="bio" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="work" onClick={toggle}>
                        Works
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWapper>
        </SidebarContainer>
    )
}

export default Sidebar
