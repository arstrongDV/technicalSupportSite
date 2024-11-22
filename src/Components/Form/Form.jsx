import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './style/ContactForm.css';
import Swal from 'sweetalert2';
import InputMask from 'react-input-mask';

let Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1abzt2p', 'template_eupx817', form.current, {
        publicKey: 'CRuhdM24MGEEOaNlJ',
      })
      .then(
        () => {
            Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Вашу інформацію надіслано",
            showConfirmButton: false,
            timer: 1500
            });
            form.current.reset();
        }
      );
        };

    return(
        <div className="FormContainer">
            <div className="blockFormText">
                <h1 className="blockFormTextC">
                    Залишіть заявку на безкоштовну консультацію з ремонту!
                </h1>
            </div>
            <div>
                <section>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="input-box">
                            <label>Імʼя<span className="requared">*</span></label>
                            <input className="field" type="text" placeholder="Введіть ваше імʼя" name='name' required />
                        </div>
                        <div className="input-box">
                            <label>Телефон<span className="requared">*</span></label>
                            <InputMask
                                className="field"
                                mask="+380 99 999 9999"
                                maskChar="_"
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+380 99 999 9999"
                                pattern="^\+380\s\d{2}\s\d{3}\s\d{4}$"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label>Адреса<span className="requared">*</span></label>
                            <input name='adress' className="field" placeholder="Введіть вашу адресу" required />
                        </div>
                        <div className="input-box">
                            <label>Опис проблеми</label>
                            <textarea name='aboutProblems' className="fieldTextArea"  placeholder="Опишіть вашу проблему" />
                        </div>
                        <button type="submit"><p className="submit">Відправити</p></button> 
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Form;