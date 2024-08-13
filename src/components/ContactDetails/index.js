import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';

const ContactDetails = ({ isMobile }) => { 

    const refForm = useRef(null);

    const sendEmail = (e) => { 
        e.preventDefault();

        console.log("refForm.current", refForm.current);

        emailjs.sendForm('service_r1ox46y', 'template_bq2pg4h', refForm.current, '1RTC3gf2JenbsQAZu') // TODO: Hide these variables so people do not steal them
            .then(
                () => {
                    alert('Message successfully sent, thank you!');
                    window.location.reload();
                },
                (error) => {
                    console.log("error", error);
                    alert('Failed to send the message, please try again');
                }
            )
    }   

    return (
        <div className="contact-container mt-16 mb-20">
            <div className="contact font-mono font-bold mt-10 rounded-3xl w-2/3">
                <h1 className="golden-ratio-4 text-center">Contact Me</h1>
                <div className="text-center">
                    <p className="text-center golden-ratio-1 md:w-2/3 mx-auto">
                        If you have a project in mind or you are curious to see how technology could help your business grow, feel free to get in touch. Just leave your name, email, and a note below and I will get back to you as soon as possible.
                    </p><br/>
                    <div className="text-center mx-auto w-8/12">
                        <form ref={refForm} onSubmit={sendEmail} className="flex flex-column">
                            <div className="form-row flex space-x-4">
                                <input type="text" name="first_name" placeholder="First Name" required className="email-inputs"/>
                                <input type="text" name="last_name" placeholder="Last Name" required className="email-inputs"/>
                            </div>
                            <div className="form-row">
                                <input type="email" name="email" placeholder="Email" required className="email-inputs mt-3" />
                            </div>
                            <div className="form-row">
                                <input placeholder="Subject" type="text" name="subject" required className="email-inputs mt-3"/>
                            </div>
                            <div className="form-row">
                                <textarea placeholder="Message" name="message" rows={4} required className="email-inputs mt-3" />
                            </div>
                            <div className="mt-11">
                                <input type="submit" value="Send" className="text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 golden-ratio-1 shadow-lg" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <ul className="flex space-x-4 justify-center">
                            <li>
                                <a href='https://www.linkedin.com/in/michaelgkochh/' target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href='https://twitter.com/MichaelKochDev' target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon icon={faXTwitter} color="#4d4d4e" className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href='https://github.com/mikekochh' target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href='https://t.me/mikekochh' target='_blank' rel='noreferrer'>
                                    <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" className="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;
