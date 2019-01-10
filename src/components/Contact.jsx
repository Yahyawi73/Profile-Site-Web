import React from 'react';

const Contact = () => (
  <div>
    <section id="contact" className="section one-page-section">
      <div className="container">
        <div className="section-title">
          <h2>contact me</h2>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <div className="col-xs-12 col-sm-4">
              <div className="contact-item mb-30">
                <div className="c-icon text-center">
                  <i className="fa fa-phone" />
                </div>
                <div className="c-text">
                  <h5>PHONE</h5>
                  <h6>+1-202-555-0138</h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="contact-item mb-30">
                <div className="c-icon text-center">
                  <i className="fa fa-map-marker" />
                </div>
                <div className="c-text">
                  <h5>LOCATION</h5>
                  <h6>4373, El Centro, CA.</h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="contact-item mb-30">
                <div className="c-icon text-center">
                  <i className="fa fa-envelope" />
                </div>
                <div className="c-text">
                  <h5>EMAIL</h5>
                  <h6>Norman@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <form id="contact-form" method="post" action="mail/contact.php">
              <div className="col-sm-6">
                <input type="text" name="name" id="name" className="input-field" required="required" placeholder="Name" />
                <span className="name-error text-center mb-30" />
              </div>
              <div className="col-sm-6">
                <input type="email" name="email" id="email" className="input-field" required="required" placeholder="Email" />
                <span className="email-error text-center mb-30" />
              </div>
              <div className="col-xs-12">
                <textarea name="message" id="message" className="input-field" required="required" placeholder="Message" />
                <span className="message-error text-center mb-30" />
              </div>
              <div id="form-message" className="error mb-30 text-center" />

              <button type="submit" className="effect submit-btn">Send Message</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
