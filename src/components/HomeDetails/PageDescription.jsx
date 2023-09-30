const PageDescription = () => {

    return (
    <p>
        <span className="preload delayedItemName" hasBeenAnimation={false} >My name is Michael Koch,</span><span className="preload delayedItemWelcome" hasBeenAnimation={false}> welcome to my portfolio page!</span>
        <br /><br />
        <p className="preload delayedItem" hasBeenAnimation={false} >
            I am a software developer with a passion for solving business problems with software. 
            In the about section, you can see my work experience, projects that I have worked 
            on, and for the technical people you can see the tech stack that I am best with. 
        </p>
        <br />
        <p className="preload delayedItem" hasBeenAnimation={false} >
            If you want me to help you build excellent software or if you just want to say hi,
            please come to the contact page and send me a message. I look forward to hearing from you!
        </p>
        <br />
    </p>
    )
}

export default PageDescription;