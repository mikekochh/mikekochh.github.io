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
            I am a dedicated software developer driven by a commitment to address complex business challenges through innovative software solutions. 
        </p>
        <br />
        <p className="preload" hasBeenAnimation={false} >
            In the about me section, you can learn about my professional work experience, projects that I have worked on, and download my full resume.
        </p>
        <br />
        <p className="preload" hasBeenAnimation={false} >
            If you are looking for some help building software, or simply wish to say hi, please come to the contact page and send me a message. I look forward to hearing from you!
        </p>
        <br />
    </p>
    )
}

export default PageDescription;