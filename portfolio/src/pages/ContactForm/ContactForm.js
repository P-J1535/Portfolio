import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Adjust the path if necessary
import * as XLSX from 'xlsx';
import contactUsImage from '../../images/contactUs.jpg';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = [
            ['Name', 'Email', 'Subject', 'Message'],
            [formData.name, formData.email, formData.subject, formData.message]
        ];
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'contact_form.xlsx');
    };

    return (
        <div className={styles.contactUs}>
            <div className={styles.imageSection}>
                <img src={contactUsImage} alt="Contact" className={styles.contactImage} />
            </div>
            <div className={styles.formSection}>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="subject" 
                        placeholder="Subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
