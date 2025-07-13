import "./contact.css"

const ContactPage = ({ contact }) => {
    console.log(contact); 
    return <div>
<section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
     

        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" required />
          <input type="email" placeholder="Your Email" className="contact-input" required />
          <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
 </section>

    </div>;
};

export default ContactPage;



   