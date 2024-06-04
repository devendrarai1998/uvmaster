export default function Header2() {
  const baseurl = process.env.url;

  return (
    <>
      {/* Main Header*/}
      <header className="main-header header-style-one">
        {/* Header Top */}
        <div className="header-top">
          <div className="inner-container">
            <div className="top-left">
              {/* Info List */}
              <ul className="list-style-one">
                <li>
                  <i className="fa fa-envelope" />{" "}
                  <a href="mailto:hello@uvhubs.com">hello@uvhubs.com</a>
                </li>
                <li>
                  <i className="fa fa-map-marker" /> Hub 66, Sector 66,
                  Gurugram, Haryana 122102
                </li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="useful-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              <ul className="social-icon-one">
                <li>
                  <a target="_blank" href="https://twitter.com/uvhubs" rel="noreferrer">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/people/Urban-Vyapari/100090189225268/" rel="noreferrer"
                  >
                    <span className="fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/uvhubs/" rel="noreferrer"
                  >
                    <span className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/uvhubs/" target="_blank" rel="noreferrer">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Header Top */}
        <div className="header-lower">
          <div className="container-fluid">
            {/* Main box */}
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <a href="/">
                    <img
                      src="/images/logo-w.png"
                      alt="UV Logo"
                      title="Urban Vaypari"
                    />
                  </a>
                </div>
              </div>
              {/*Nav Box*/}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation">
                    <li className="dropdown">
                      <a href="#">Company</a>
                      <ul>
                        <li>
                          <a href="/about">About Us</a>
                        </li>

                        <li>
                          <a href="/press-and-media">Press & Media</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Business Type</a>
                      <ul>
                        <li>
                          <a href="/food-and-beverage-industry">
                            Food & Beverage Industry
                          </a>
                        </li>
                        <li>
                          <a href="/retail-industry">Retail Industry</a>
                        </li>
                        <li>
                          <a href="#">Other</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="/blogs">Blogs</a>
                    </li>
                    <li>
                      <a href="/contact">Get in Touch</a>
                    </li>
                  </ul>
                </nav>
                {/* Main Menu End*/}
              </div>
              <div className="outer-box">
                <a href="/partner-registration-form" className="info-btn">
                  <i className="icon fa fa-handshake" />
                  Become Partner<small>Submit Details Here </small>
                </a>
                {/* Mobile Nav toggler */}
                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <a href="/">
                  <img
                    src={`${baseurl}/images/logo-2.png`}
                    alt="UV Logo"
                    title="Urban Vaypari"
                  />
                </a>
              </div>
              <div className="close-btn">
                <i className="icon fa fa-times" />
              </div>
            </div>
            <ul className="navigation clearfix">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </ul>
            <ul className="contact-list-one">
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Call Now</span>
                  <a href="tel:+919667761088">+91 9667761088</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Send Email</span>
                  <a href="mailto:hello@uvhubs.com">hello@uvhubs.com</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Working Hours </span>
                  Mon - Sat 8:00AM - 6:30PM
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* Header Search */}

        {/* End Header Search */}
        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="inner-container">
              {/*Logo*/}
              <div className="logo">
                <a href="/" title="">
                  <img
                    src={`${baseurl}/images/logo-2.png`}
                    alt="UV Logo"
                    title="Urban Vaypari"
                  />
                </a>
              </div>
              {/*Right Col*/}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      {/*Keep This Empty / Menu will come through Javascript*/}
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header>
      {/*End Main Header */}
    </>
  );
}
