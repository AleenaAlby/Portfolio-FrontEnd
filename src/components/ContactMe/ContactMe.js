import React, { useState } from "react";
import axios from "axios";
import "./ContactMe.css";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/send_message/", {
                name: name,
                email: email,
                message: message,
            });

            if (response.status === 201) {
                alert("Message sent successfully");
                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message");
        }
    };

    return (
        <div className="contact-form">
            <h2 className="title">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-row">
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="input-row">
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="message"
                        required
                    />
                </div>
                <button type="submit">Hire Me</button>
            </form>
        </div>
    );
};

export default ContactForm;
