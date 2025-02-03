import React from 'react';
import contact from '../CSS/Contact.css'

function Contact() {
    return (
        <div className="contact-page-container">
            <h2>Contact Us</h2>

            <div className="contact-info">
                <p><strong>Address:</strong> 123 Food Delivery St., Food City, FL 12345</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> support@fooddelivery.com</p>
            </div>

            <div className="business-hours">
                <h3>Our Business Hours</h3>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM</p>
                <p><strong>Saturday - Sunday:</strong> 10:00 AM - 6:00 PM</p>
            </div>

            <div className="social-media">
                <h3>Follow Us</h3>
                <p><strong>Facebook:</strong> <a href="https://www.facebook.com/fooddelivery" target="_blank" rel="noopener noreferrer">facebook.com/fooddelivery</a></p>
                <p><strong>Twitter:</strong> <a href="https://www.twitter.com/fooddelivery" target="_blank" rel="noopener noreferrer">twitter.com/fooddelivery</a></p>
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/fooddelivery" target="_blank" rel="noopener noreferrer">instagram.com/fooddelivery</a></p>
            </div>
        </div>
    );
}

export default Contact;
