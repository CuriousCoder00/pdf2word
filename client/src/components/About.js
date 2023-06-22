import React from 'react'

const About = (props) => {
    return (
        <div className="container">
            <div className={`container text-${props.theme === "dark" ? "secondary" : "dark"} mb-3`}>
                Are you tired of the limitations and frustrations that come with working with PDF files? Wish you could effortlessly convert your PDF documents into editable Word files? Look no further! Introducing DocuFlex, the leading PDF to Word converter that empowers you to unlock the true potential of your PDF files.
            </div>
            <div className={`container text-${props.theme === "dark" ? "secondary" : "dark"} mb-3`}>
                DocuFlex is the ultimate solution for anyone who needs to convert PDF documents into fully editable Word files with just a few clicks. With our advanced technology and user-friendly interface, you can now transform any PDF document into a Word file without losing any formatting, layout, or content.
            </div>
            <div className={`container text-${props.theme === "dark" ? "light" : "dark"} mb-3`}>
                At DocuFlex, we are committed to delivering the highest quality conversion services. Our dedicated team of experts continuously improves and updates our technology to ensure the best results for our users.
            </div>
        </div>
    )
}

export default About
