import { useEffect } from 'react';

const PageDescription = () => {

    useEffect(() => {
        const displayName = () => {
            const hiddenElements = document.querySelectorAll('.preloadName');
            hiddenElements.forEach((element) => {
                element.classList.remove('preloadName');
                element.classList.add('postload');
            });
        }

        const displayWelcome = () => {
            const hiddenElements = document.querySelectorAll('.preloadWelcome');
            hiddenElements.forEach((element) => {
                element.classList.remove('preloadWelcome');
                element.classList.add('postload');
            });
        }

        setTimeout(() => {
            displayName();
        }, 2000);

        setTimeout(() => {
            displayWelcome();
        }, 3000);
    })

    return (
    <p>
        <span className="preloadName" hasBeenAnimation={false} >My name is Michael Koch,</span><span className="preloadWelcome" hasBeenAnimation={false}> welcome to my portfolio page!</span>
        <br /><br />
        <p className="preload" hasBeenAnimation={false} >
            I am a software developer with a passion for solving business problems with software. 
            In the about section, you can see my work experience, projects that I have worked 
            on, and for the technical people you can see the tech stack that I am best with. 
        </p>
        <br />
        <p className="preload" hasBeenAnimation={false} >
            If you want me to help you build excellent software or if you just want to say hi,
            please come to the contact page and send me a message. I look forward to hearing from you!
        </p>
        <br />
    </p>
    )
}

export default PageDescription;