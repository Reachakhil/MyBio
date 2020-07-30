import React, { useState } from 'react';
import './App.css';
import './MainBody.css';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';

const MainBody = props => {
    let [Map, setMap] = useState(false);

    return (
        <div>
            <div className="body">
                <div className="body__headerContainer">
                    <div className="body__headerText">
                        <h1 className="body__title"> Akhil Bhardwaj</h1>
                        <h2 className="body__subtitle">Software Engineer in Banglore</h2>
                    </div>
                    <div className="body__Img">
                        <img id="titleImg" src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif" />
                    </div>
                </div>
                <div className="body__links">
                    <a className="icon" href="https://www.linkedin.com/mwlite/in/akhil-bhardwaj-a44767144" target="_blank"><LinkedInIcon /></a>
                    <a class="icon" href="https://www.instagram.com/akhil_sharma7/" target="_blank"><InstagramIcon /></a>
                    <a className="icon" href="https://twitter.com/AbhiAkhil96?s=09" target="_blank"><TwitterIcon /></a>
                    <a className="icon" href="mailto: bhardwaj.akhil96@gmail.com"><EmailIcon /></a>
                    <a className="icon" href="https://github.com/Reachakhil" target="_blank"><GitHubIcon /></a>
                    <a className="icon" onClick={() => setMap(!Map)} ><PublicIcon /></a>

                </div>
                <div className="body__Tabs">
                    <div><Button className="btn" variant="outlined" color="secondary">
                        About Me</Button></div>
                    <div><Button className="btn" variant="outlined" color="secondary">
                    Portfolio</Button></div>
                    <div><Button className="btn" variant="outlined" color="secondary">
                    Blog</Button></div>
                </div>
                <div className="body__SwitchDiv">
                Hi there! My name is Akhil and I'm a Software Engineer at AccionLabs. My primary skills include Web Development.
                
                </div>
                {Map && <iframe src="https://www.google.com/maps/d/embed?mid=1k35Ia3iDr0SyJaMdv2N6c2_AUvw&hl=en" width="640" height="480"></iframe>
                }
            </div>


        </div>
    );

}



export default MainBody;