import { useState } from 'react'
import React from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            alert("Form submitted successfully ✅");
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <>
            <div className='allform'>
                <div className='getin'>
                    <h1>Get In Touch With Me</h1>
                </div>

                <div className='callme'>
                    <div className='notes'>
                        <h2>Call Me</h2>
                        <p>+234 9062 4744 456</p>

                        <h2>Email</h2>
                        <p>muhammadrabiuislamiyah@gmail.com</p>

                        <h2>Address</h2>
                        <p>No. 15, Alabata, Moniya, Ibadan</p>
                    </div>

                    <div className='input-Section'>
                        <input
                            type="text"
                            placeholder='Full Name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}

                        <input
                            type="email" 
                            placeholder='Email' 
                            name='email' 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}

                        <textarea name="message" 
                        id="Message" placeholder='Message' cols={30} rows={5} 
                        value={formData.message}
                        onChange={handleChange} 
                        className='textA'></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}

                        <div className='contact-btn'>
                            <button type="submit" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
