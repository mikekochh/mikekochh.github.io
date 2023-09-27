import React from 'react';

const PageDescription = () => {

    return (
    <p>
        <span className="preload delayedItemName">My name is Michael Koch,</span><span className="preload delayedItemWelcome"> welcome to my portfolio page!</span>
        <br /><br />
        <p className="preload delayedItem">
            I am a software developer with a passion for solving business problems with software. 
            In the about section, you can see my work experience, projects that I have worked 
            on, and for the technical people you can see the tech stack that I am best with. 
        </p>
        <br />
        <p className="preload delayedItem">
            If you want me to help you build excellent software or if you just want to say hi,
            please come to the contact page and send me a message. I look forward to hearing from you!
        </p>
        <br />
        <p className="preload delayedItem">Codebase for this website can be found <a href="https://github.com/mikekochh/portfolio" target='_blank' rel="noreferrer">here</a></p>
    </p>
    )
}

export default PageDescription;