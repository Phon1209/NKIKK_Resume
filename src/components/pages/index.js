import React,{useState} from 'react'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import Bio from './../bio'
import Education from './../education'
import Skill from './../skills'
import Work from './../works'
import Tools from './../tools'
import Contact from './../contact'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={ toggle}/>
            <Navbar toggle={toggle} />
            <Bio />
            <Education />
            <Tools />
            <Skill />
            <Work />
            <Contact/>
        </>
    )
}

export default Home
