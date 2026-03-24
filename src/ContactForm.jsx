// ============================================================
//  ContactForm.jsx  —  Drop-in replacement for the contact
//  form section in GuelwabPortfolio.jsx
//
//  1. npm install @emailjs/browser
//  2. Fill in your 3 EmailJS keys below (from emailjs.com)
//  3. Replace the <div className="cw-box"> block in
//     GuelwabPortfolio.jsx with <ContactForm />
//  4. Add this import at the top of GuelwabPortfolio.jsx:
//     import ContactForm from "./ContactForm";
// ============================================================

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ── YOUR EMAILJS CREDENTIALS ─────────────────────────────────
// Get these from https://www.emailjs.com/
// Dashboard → Account → API Keys  (for PUBLIC_KEY)
// Dashboard → Email Services      (for SERVICE_ID)
// Dashboard → Email Templates     (for TEMPLATE_ID)
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ── TEMPLATE VARIABLE MAPPING ────────────────────────────────
// In your EmailJS template, use:
//   {{from_name}}   → sender's name
//   {{from_email}}  → sender's email
//   {{subject}}     → message subject
//   {{message}}     → message body
//   {{to_name}}     → will be "Guelwab" (recipient)

export default function ContactForm() {
    const formRef = useRef();

    const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
    const [form,   setForm]   = useState({
        from_name:  "",
        from_email: "",
        subject:    "",
        message:    "",
    });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!form.from_name || !form.from_email || !form.message) {
            setStatus("error");
            return;
        }

        setStatus("sending");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );

            setStatus("success");
            setForm({ from_name: "", from_email: "", subject: "", message: "" });

            // Reset back to idle after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);

        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <div className="cw-box">
            <div className="cw-box-title">Envoyer un Message</div>

            <form ref={formRef} onSubmit={handleSubmit} noValidate>

                {/* Hidden field — recipient name for the template */}
                <input type="hidden" name="to_name" value="Guelwab" />

                <div className="cw-field">
                    <label className="cw-label" htmlFor="from_name">Votre Nom</label>
                    <input
                        id="from_name"
                        name="from_name"
                        type="text"
                        className="cw-input"
                        placeholder="Ex. Jean Mukengezi"
                        value={form.from_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="cw-field">
                    <label className="cw-label" htmlFor="from_email">Email</label>
                    <input
                        id="from_email"
                        name="from_email"
                        type="email"
                        className="cw-input"
                        placeholder="email@exemple.com"
                        value={form.from_email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="cw-field">
                    <label className="cw-label" htmlFor="subject">Sujet</label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="cw-input"
                        placeholder="Booking · Collaboration · Presse"
                        value={form.subject}
                        onChange={handleChange}
                    />
                </div>

                <div className="cw-field">
                    <label className="cw-label" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="cw-input"
                        placeholder="Décrivez votre projet..."
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Status messages */}
                {status === "success" && (
                    <div className="form-status success">
                        ✓ Message envoyé ! Guelwab vous répondra bientôt.
                    </div>
                )}
                {status === "error" && (
                    <div className="form-status error">
                        ✗ Une erreur s'est produite. Vérifiez les champs et réessayez.
                    </div>
                )}

                <button
                    type="submit"
                    className="btn-g"
                    style={{ width: "100%", marginTop: 8 }}
                    disabled={status === "sending"}
                >
                    {status === "sending" ? "Envoi en cours…" : "Envoyer →"}
                </button>

            </form>
        </div>
    );
}