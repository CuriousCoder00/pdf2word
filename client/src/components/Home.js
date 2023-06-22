import React from 'react';
import FileUploadForm from './FileUploadForm';
import About from "./About";

const Home = (props) => {
    return (
        <div className='mt-4 container text-center'>
            <div className={`text-${props.theme === 'dark' ? 'light' : 'dark'}`}>
                    <div>
                        <h1>PDF2WORD <span style={{ color: "rgb(236 101 24)" }}>CONVERTER</span></h1>
                        <p>Convert your <span style={{ color: "rgb(236 101 24)" }}>PDF Files </span>to <span style={{ color: "rgb(236 101 24)" }}>WORD </span>documents.</p>
                </div>
            </div>
            <About theme={props.theme}/>
            <FileUploadForm theme={props.theme}/>
        </div>
    )
}

export default Home
