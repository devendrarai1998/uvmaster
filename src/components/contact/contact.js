import Header2 from "../header/header2";
import Footer from "../footer/footer";
import { useState } from "react";
import { Modal } from "bootstrap";
import axios from "axios";
export default function ContactUs() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [phone, setphone] = useState("");
  const [subject, setsubject] = useState("");
  const baseurl = process.env.url;

  const handleUpload = async () => {
    try {
      if (name && email && phone && subject && message) {
        const reader = new FileReader();

        const response = await axios.post(`${baseurl}/api/backendapi/contact`, {
          name: name,
          email: email,
          phone: phone,
          message: message,
          subject: subject,
        });

        console.log(response);
        if (response.status == 200) {
          const popup = document.getElementById("popupMessage");
        //   const modal = new bootstrap.Modal(popup);
          const modal = Modal(popup);
          modal.show();

          setTimeout(() => {
            modal.hide();
          }, 12000);
        } else {
          // Handle other status codes or conditions
          alert("Invalid request or unknown error");
        }
        if (response.status == 401) {
          alert("invalid slugname");
        }
      } else {
        alert("All fields are required");
      }
    } catch (error) {
      console.error("File upload failed", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      <Header2 />
      {/* Start main-content */}
      <section
        className="page-title"
        style={{ backgroundImage: "url(images/background/uv-top-banner.webp)" }}
      >
        <div className="auto-container">
          <div className="title-outer">
            <h1 className="title">Get in Touch</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>
      {/* end main-content */}
      {/*Contact Details Start*/}
      <section className="contact-details">
        <div className="container ">
          <div className="row">
            <div className="col-xl-5 col-lg-6 mb-md-60">
              <div className="contact-details__right">
                <div className="sec-title">
                  <h2>We are here to help you</h2>

                  <div className="text">
                    CORP OFFICE: Hub 66, Ground Floor, Near AIPL Joy Street,
                    Sector 66, Gurugram, Haryana 122102
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-phone-plus" />
                    </div>
                    <div className="text">
                      <h6>Have any question?</h6>
                      <a href="tel:9667761088">
                        <span>Call us:</span> +91 9667764288
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1" />
                    </div>
                    <div className="text">
                      <h6>Email us on:</h6>
                      <a href="mailto:hello@uvhubs.com">hello@uvhubs.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              {/* Google Map HTML Codes */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.928938840317!2d77.05497427560167!3d28.391214194997925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25051b9ce07b1833%3A0xa1084180caf686f8!2sUrban%20Vyapari!5e0!3m2!1sen!2sin!4v1706181184484!5m2!1sen!2sin"
                width="100%"
                height={550}
                frameBorder={0}
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </section>
      {/*Contact Details End*/}
      {/*Contact Details Start*/}
      <section className="team-contact-form">
        <div className="container pb-100">
          <div className="sec-title text-center">
            <h2 className="section-title__title">
              Feel Free to Write Our <br /> Technology Experts
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Contact Form */}
              <form
                id="contact_form"
                name="contact_form"
                className=""
                action={handleUpload}
                method="post"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="email"
                        className="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="subject"
                        className="form-control required"
                        type="text"
                        placeholder="Enter Subject"
                        value={subject}
                        onChange={(e) => setsubject(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control required"
                    rows={5}
                    placeholder="Enter Message"
                    defaultValue={""}
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 text-center">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    defaultValue=""
                  />
                  <button
                    type="submit"
                    className="theme-btn btn-style-one"
                    data-loading-text="Please wait..."
                  >
                    <span className="btn-title">SUBMIT</span>
                  </button>
                </div>
              </form>
              {/* Contact Form Validation*/}
            </div>
          </div>
        </div>
      </section>

      {/*Contact Details End*/}

      <Footer />
      <div className="modal" id="popupMessage" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-white bg-white">
              <p className="text-success">
                Thanks For Contacting Us! We Will Revert Back To you Soon.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
