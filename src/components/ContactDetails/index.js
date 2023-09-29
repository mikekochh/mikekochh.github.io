import './index.scss';

const ContactDetails = () => { 
    return (
        <div className="ml-40 font-mono font-bold mb-100 contact">
            <h1 className="mt-40 text-9xl text-center">Contact Me</h1>
            <div className="flex mt-20">
                <p className="text-center text-3xl w-1/2">
                    I am always interest in freelancing opportunities and exploring business relationships.
                    But, if you need anything else from me, feel free to reach out to me and I will get back
                    to you as soon as I can. </p>
                <div className="contact-form">
                    <form>
                        <ul>
                            <li className="w-1/2">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    required
                                />
                            </li>
                            <li className="w-1/2">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    required
                                />
                            </li>
                            <li>
                                <input 
                                    placeholder="Subject" 
                                    type="text" 
                                    name="subject"
                                    required 
                                />
                            </li>
                            <li>
                                <textarea 
                                    placeholder="Message" 
                                    name="message" 
                                    required 
                                />
                            </li>
                            <li>
                                <input 
                                    type="submit"
                                    value="SEND" 
                                />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />

        </div>
    );
}

export default ContactDetails;