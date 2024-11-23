import React, { useRef} from "react";
import emailjs from '@emailjs/browser';
import './style/ContactForm.css';
import Swal from 'sweetalert2';

const Form = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
  
//     emailjs
//       .sendForm('service_1abzt2p', 'template_eupx817', form.current, 'CRuhdM24MGEEOaNlJ')
//       .then(
//         () => {
//           Swal.fire({
//             position: "top-center",
//             icon: "success",
//             title: "Вашу інформацію надіслано",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           form.current.reset();
//         },
//         (error) => {
//           console.error("Email sending error", error);  
//           Swal.fire({
//             position: "top-center",
//             icon: "error",
//             title: "Помилка при надсиланні. Спробуйте пізніше.",
//             showConfirmButton: true,
//           });
//         }
//       ).catch(err => {
//         console.error("Unexpected error:", err); 
//       });
//   };

  return (
    <div className="FormContainer">
      <div className="blockFormText">
        <h1 className="blockFormTextC">
          Залишіть заявку на безкоштовну консультацію з ремонту!
        </h1>
      </div>
      <div>
        <section>
        {/* ref={form} onSubmit={sendEmail} */}
          <form> 
            <div className="input-box">
              <label>Імʼя<span className="requared">*</span></label>
              <input
                className="field"
                type="text"
                placeholder="Введіть ваше імʼя"
                name="name"
                required
              />
            </div>
            <div className="input-box">
              <label>Телефон<span className="requared">*</span></label>
              <input
                className="field"
                placeholder="+380 99 999 9999"
                type="tel"
                name="phone"
              />
            </div>
            <div className="input-box">
              <label>Адреса<span className="requared">*</span></label>
              <input
                name="adress"
                className="field"
                placeholder="Введіть вашу адресу"
                required
              />
            </div>
            <div className="input-box">
              <label>Опис проблеми</label>
              <textarea
                name="aboutProblems"
                className="fieldTextArea"
                placeholder="Опишіть вашу проблему"
              />
            </div>
            <button type="submit">
              <p className="submit">Відправити</p>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Form;
