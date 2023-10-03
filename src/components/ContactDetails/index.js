import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactDetails = () => { 

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
        <div className="ml-24 md:ml-40 font-mono font-bold contact">
            <h1 className="mt-40 md:text-60 text-40 text-center preload">Contact Me</h1>
            <div className="mt-5 text-center preload">
                <p className="text-center text-15 md:w-1/2 pl-4 pr-4 mx-auto contactMeWidth">
                    I am always seeking freelance opportunities and am also looking to cultivate collaborative business connections.
                    If you require any further information or assistance, please do not hesistate to contact me and I
                    will respond as soon as I can. Thank you!</p><br/>
                <div className="text-center mx-auto w-8/12">
                    <form ref={refForm} onSubmit={sendEmail} className="flex flex-column">
                        <div className="form-row">
                            <input type="text" name="name" placeholder="Name" required className="email-inputs"/>
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
                        <div className="form-row">
                            <input type="submit" value="SEND" className="send-button cursor-pointer mt-3 rounded-lg" />
                        </div>
                    </form>
                </div>
            </div>
            <br /><br /><br /><br />
        </div>
    );
}

export default ContactDetails;