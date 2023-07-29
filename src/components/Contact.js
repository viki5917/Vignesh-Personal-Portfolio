import React ,{useRef}from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const form=useRef();
    
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_ugnx00r', 'template_dkpa0ai', form.current, 'pDH8yNFXijwK2g803')
              .then((result) => {
                Swal.fire({
                    title:`Message Sent <span style='font-size:30px;'>&#128515;</span>`,
                    text:'Thank you for getting in touch with me!',
                    icon:'success',
                    confirmButtonColor:'dodgerblue',
                    allowEnterKey:'true'
                }
                  )
              }, (error) => {
                Swal.fire({
                    icon: 'error',
                    title: `Oops... <span style='font-size:30px;'>&#128533;</span>`,
                    text: 'Something went wrong!',
                    confirmButtonColor:'red',
                    allowEnterKey:'true'
                  })
              });
              
              e.target.reset();
    }

    
  return (
    <div className='contact-main' id='Contact'>
        <div className='contact-container'>
            <main className='contact-row'>
                <section className='col left'>

                    <div className='contactTitle'>
                        <h2>Get In Touch</h2>
                        <p>I'd love if you reached out to me.Even if it's just to say "Hey!".Don't hesitate! Drop me a line and I'll get back to you ASAP!</p>
                    </div>
                    
                    <div className='contactInfo'>
                        <div className='iconGroup'>
                            <div className='icon'>
                                <FontAwesomeIcon className='fa-solid fa-phone' icon={faPhone} />
                            </div>
                            <div className='details'>
                                <span>Phone</span>
                                <span>9080205237</span>
                            </div>
                        </div>

                        <div className='iconGroup'>
                            <div className='icon'>
                                <FontAwesomeIcon className='fa-solid fa-envelope' icon={faEnvelope} />
                            </div>
                            <div className='details'>
                                <span>Email</span>
                                <span>vignesh71214@gmail.com</span>
                            </div>
                        </div>

                        <div className='iconGroup'>
                            <div className='icon'>
                                <FontAwesomeIcon className='fa-solid fa-location-dot' icon={faLocationDot} />
                            </div>
                            <div className='details'>
                                <span>Location</span>
                                <span>Trichy,TamilNadu</span>
                            </div>
                        </div>
                    </div>


                    <div className='socialMedia'>
                        <a href='https://www.facebook.com/vignesh71214/' target='_blank'><FontAwesomeIcon className='fa-brands fa-facebook-f' icon={faFacebookF} /></a>
                        <a href='https://www.instagram.com/viki.3208/' target='_blank'><FontAwesomeIcon className='fa-brands fa-instagram' icon={faInstagram} /></a>
                        <a href='https://github.com/viki5917' target='_blank'><FontAwesomeIcon className='fa-brands fa-github' icon={faGithub} /></a>
                        <a href='https://linkedin.com/in/vignesh-s-9a1802222' target='_blank'><FontAwesomeIcon className='fa-brands fa-linkedin-in' icon={faLinkedinIn} /></a>
                    </div>

                </section>





                <section className='col right'>
                    <form ref={form}  className='messageForm' autoComplete='new-off' onSubmit={sendEmail} id="fake-hidden-input-to-stop-google-address-lookup">
                        <div className='inputGroup halfWidth'>
                            <input type='text' name="user_name" required="required" autoComplete="none" />
                            <label>Your Name</label>
                        </div>
                        <div className='inputGroup halfWidth'>
                            <input type='email' name="user_email" required="required" autoComplete="none" />
                            <label>Email</label>
                        </div>
                        <div className='inputGroup fullWidth'>
                            <input type='text' name="subject" required="required" autoComplete="none" />
                            <label>Subject</label>
                        </div>
                        <div className='inputGroup fullWidth'>
                            <textarea required="required" name='message' autoComplete="none" />
                            <label>Message</label>
                        </div>
                        <div className='inputGroup fullWidth inputGroup-button'>
                            <button type='submit' >Send Message</button>
                            <a href='Vignesh s Resume.pdf' download='Vignesh s Resume.pdf'>Download CV</a>
                        </div>
                    </form>
                </section>
            </main>

        </div>
    </div>
  )
}

export default Contact