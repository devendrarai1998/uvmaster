import Image from "next/image";
export default function Header() {
  const baseurl = process.env.url;
  return (


    <header className="main-header header-style-one">
      <div className="container-fluid">
        {/* Main box */}
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <a href="/">
                <img src={`${baseurl}/images/logo-2.webp`} alt="" title="Urban Vaypari" />
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
                      <a href="/food-and-beverage-industry">
                        Other
                      </a>
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
            <div className="ui-btn-outer">
              <button className="ui-btn ui-btn search-btn">
                <span className="icon lnr lnr-icon-search"></span>
              </button>
            </div>

            <a href="tel:+919667761088" className="info-btn">
              <i className="icon fa fa-phone"></i>
              <small>Call Anytime</small>+91 9667761088
            </a>

            {/* Mobile Nav toggler */}
            <div className="mobile-nav-toggler">
              <span className="icon lnr-icon-bars"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>

        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <a href="/">
                <img src="images/logo.png" alt="" title="" />
              </a>
            </div>
            <div className="close-btn">
              <i className="icon fa fa-times"></i>
            </div>
          </div>

          <ul className="navigation clearfix">
            {/*Keep This Empty / Menu will come through Javascript*/}
          </ul>
          <ul className="contact-list-one">
            <li>
              {/* Contact Info Box */}
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset"></i>
                <span className="title">Call Now</span>
                <a href="tel:+92880098670">+92 (8800) - 98670</a>
              </div>
            </li>
            <li>
              {/* Contact Info Box */}
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1"></span>
                <span className="title">Send Email</span>
                <a href="mailto:help@company.com">help@company.com</a>
              </div>
            </li>
            <li>
              {/* Contact Info Box */}
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock"></span>
                <span className="title">Send Email</span>
                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
              </div>
            </li>
          </ul>

          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* End Mobile Menu */}

      {/* Header Search */}
      <div className="search-popup">
        <span className="search-back-drop"></span>
        <button className="close-search">
          <span className="fa fa-times"></span>
        </button>

        <div className="search-inner">
          <form method="post" action="blog-showcase.html">
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                value=""
                placeholder="Search..."
                required=""
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* End Header Search */}

      {/* Sticky Header  */}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
            {/*Logo*/}
            <div className="logo">
              <a href="/" title="">
                <img src="images/logo-2.png" alt="" title="" />
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
                <span className="icon lnr-icon-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Menu */}
    </header>
  );
}
