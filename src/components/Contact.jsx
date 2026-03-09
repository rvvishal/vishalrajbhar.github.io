import "../styles/contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// ── Replace these with your actual EmailJS credentials ──
const EMAILJS_SERVICE_ID  = "service_dou4wbg";
const EMAILJS_TEMPLATE_ID = "template_53w86w6";
const EMAILJS_PUBLIC_KEY  = "JtwSsYn2zh8raOgNR";

function Contact() {
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);

        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                from_name:    formData.get("from_name"),
                from_email:   formData.get("from_email"),
                project_type: formData.get("project_type"),
                message:      formData.get("message"),
            },
            EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatus("success");
            e.target.reset();
            setTimeout(() => setStatus("idle"), 4000);
        })
        .catch(() => {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        });
    }

    return (
        <section className="section2" id="contact">
            <div className="contact-content">
                <p className="title">GET IN TOUCH</p>
                <h1>Let's build something great together</h1>
                <p className="description">
                    Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your name"
                        required
                    />
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Email address"
                        required
                    />
                    <input
                        type="text"
                        name="project_type"
                        placeholder="Project type"
                        className="full"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Tell me about your project"
                        className="full"
                        required
                    />
                    <button
                        type="submit"
                        className="btn-submit full"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? "Sending..." : "Send Message →"}
                    </button>
                </form>

                <div className="contact-links">
                    <a href="mailto:vishalrajbhar6000@gmail.com" className="contact-link">
                        ✉ vishalrajbhar6000@gmail.com
                    </a>
                </div>
            </div>

            {/* Toast notifications */}
            <div className={`toast ${status === "success" ? "show" : ""}`}>
                Message sent! I'll be in touch soon 🎉
            </div>
            <div className={`toast toast-error ${status === "error" ? "show" : ""}`}>
                Something went wrong. Please try again 😔
            </div>
        </section>
    );
}

export default Contact;