import React from 'react';
import { useForm } from '../hooks/useForm';

const initialForm = {
    name: "",
    email: "",
   
}

const valitationForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü/s]+$/;
    let regexEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
   


    if (!form.name.trim()) {
        errors.name = "por favor chequea que la informacion sea correcta"
    } else if (!regexName.test(form.name.trim())) {
        errors.name = " el campo nmbre solo acepta letras"
    }

    if (!form.email.trim()) {
        errors.email = "por favor chequea que la informacion sea correcta"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = " el campo 'Email' es invalido"
    } 

    
    return errors;
}

const ContactForm = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm, valitationForm)

    return (
        <div>
            <h2>formulario de examen</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder='escribe tu nombre'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                />
                {errors.name && <p className='errors'>{errors.name}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder='escibe tu email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    required
                />
                {errors.email && <p className='errors'>{errors.email}</p>}

            
                <input type="submit" value="enviar" 
                
                
                />
            </form>
        </div>
    );
};





export default ContactForm;
