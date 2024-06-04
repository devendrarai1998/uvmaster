const baseurl = process.env.url;
export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="bg bg-pattern-9" />
      <div className="auto-container">
        <div className="subscribe-form">
          <div className="title-column">
            <h5 className="title">
              <i className="icon flaticon-open-envelope" /> Subscribe now to get{" "}
              <br />
              latest updates
            </h5>
          </div>
          <div className="form-column">
            <form method="post" action="#">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
                <button type="button" className="theme-btn">
                  <i className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*Widgets Section*/}
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            {/*Footer Column*/}
            <div className="footer-column col-xl-3 col-lg-12 col-md-12">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <a href="/">
                    <img
                      src={`${baseurl}/images/logo-w.webp`}
                      alt="Urban Vaypari"
                    />
                  </a>
                </div>
                <div className="text">
                  Urban Vyapari empowers retailers and restaurateurs with
                  game-changing, AI-powered technology.
                </div>
                <ul className="social-icon-two">
                  <li>
                    <a target="_blank" href="https://twitter.com/uvhubs">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/people/Urban-Vyapari/100090189225268/"
                    >
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/uvhubs/"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/uvhubs/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Footer Column*/}
            <div className="footer-column col-xl-3 col-lg-4 col-md-4">
              <div className="footer-widget links-widget">
                <h6 className="widget-title">Quick Links</h6>
                <ul className="user-links">
                  <li>
                    <a href="/about">About Company</a>
                  </li>
                  <li>
                    <a href="/partner-registration-form">Become Partner</a>
                  </li>

                  <li>
                    <a href="#">Meet The Team</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Footer Column*/}
            <div className="footer-column col-xl-3 col-lg-4 col-md-4 col-sm-8">
              <div className="footer-widget links-widget">
                <h6 className="widget-title">Explore Links</h6>
                <ul className="user-links">
                  <li>
                    <a href="/food-and-beverage-industry">
                      Food & Beverage Industry
                    </a>
                  </li>
                  <li>
                    <a href="/retail-industry">Retail Industry</a>
                  </li>
                  <li>
                    <a href="/press-and-media">Press & Media</a>
                  </li>

                  <li>
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/faqs">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*Footer Column*/}
            <div className="footer-column col-xl-3 col-lg-4 col-md-4">
              <div className="footer-widget contacts-widget">
                <h6 className="widget-title">Contact</h6>
                <div className="text">
                  Hub 66, Ground Floor, Near AIPL Joy Street, Sector 66,
                  Gurugram, Haryana 122102
                </div>
                <ul className="contact-info">
                  <li>
                    <i className="fa fa-envelope" />{" "}
                    <a href="mailto:needhelp@potisen.com">hello@uvhubs.com</a>
                    <br />
                  </li>
                  <li>
                    <i className="fa fa-phone-square" />{" "}
                    <a href="tel:+91 9667764288">+91 9667764288</a>
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer Bottom*/}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © Copyright 2023-24 by <a href="/"> Urban Vyapari.</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
