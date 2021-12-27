import React from 'react'
import { ReactComponent as  Mailsvg} from "./svgs/mail.svg"
import { ReactComponent as  Linkedinsvg} from "./svgs/linkedin.svg"
import { ReactComponent as  Websitesvg} from "./svgs/website.svg"

const contact = () =>{
    return (
        <footer id="contact" className='bg-pink-400 flex flex-col p-4 w-full'>
            <span className="text-3xl font-bold text-center block mx-auto my-6 text-white">
                Contact
            </span>
            <div className="flex flex-col md:flex-row space items-center justify-between">
                <div className="flex flex-1 flex-col items-center">
                    {/* svg */}
                    <Mailsvg style={{width: "4rem" }}/>
                    {/* detail */}
                    <p className='text-white'>nantitakik.c@gmail.com</p>
                </div>
                <div className="flex flex-1 flex-col items-center">
                    {/* svg */}
                    <Linkedinsvg style={{width: "4rem" }}/>
                    {/* detail */}
                    <p className='text-white'>linkedin.com/in/nantitakik</p>
                </div>
                <div className="flex flex-1 flex-col items-center">
                    {/* svg */}
                    <Websitesvg style={{width: "4rem" }}/>
                    {/* detail */}
                    <p className='text-white'>behance.net/nantitakik</p>
                </div>
            </div>
        </footer>
    )
}

export default contact
