import Header2 from "../header2/header2";
import Footer from "../footer/footer";
import Clients from "../clients/clients";
import Enquire from "../enquire/enquire";
export const metadata = {
  title: "About Company | Urban Vypari",
  description:
    "Urban Vyapari empowers retailers and restaurateurs with game-changing, AI-powered technology.",
};
function About() {
  return (
    <div>
      <Header2 />
      {/* Start main-content */}
      <section
        className="page-title"
        style={{ backgroundImage: "url(images/background/uv-top-banner.webp)" }}
      >
        <div className="auto-container">
          <div className="title-outer">
            <h1 className="title">About Us</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </section>
      {/* end main-content */}

      {/* About Section */}
      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <div
              className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <h2>About Urban Vyapari</h2>
                  <div className="text text-justify">
                    At Urban Vyapari, we empower retailers and restaurateurs
                    with game-changing, AI-powered technology. Launched in July
                    2023, we’re set on a mission to revolutionize retail
                    businesses across India with an innovative suite of
                    solutions tailored for diverse market needs.We bring to the
                    table a spectrum of services spanning across infra-retail
                    expansion (UV Projects), state-of-the-art Point of Sale
                    (POS) solutions (UV POS), and data-driven marketing toolkits
                    (UV Digital) that guarantee an increase in revenue and
                    customer footfall. Our flagship products, UV Elevate and UV
                    Blaze, integrate advanced technology with user-friendly
                    interfaces to deliver unmatched retail experience. Packed
                    with features such as inventory management, supplier
                    management, and multiple payment options, our solutions are
                    designed to streamline operations, enhance efficiency, and
                    unlock the potential of businesses. But our services extend
                    beyond providing POS solutions. With UV Projects, we offer a
                    comprehensive infrastructure solution, transforming the
                    retail landscape, and setting up businesses for success.
                    Additionally, our UV Digital services offer businesses a
                    robust platform to boost their visibility and engage
                    customers better.At the core of Urban Vyapari is a team of
                    dedicated and dynamic professionals. Our commitment to
                    quality, innovation, and customer satisfaction is what sets
                    us apart. We are passionate about supporting businesses to
                    navigate the digital world and reach unprecedented heights
                    of success. Welcome to Urban Vyapari – Businesses Made Easy!
                  </div>
                </div>

                <div className="btn-box">
                  <a href="tel:+919667764288" className="info-btn">
                    <i className="icon fa fa-phone" />
                    <small>Call Anytime</small> +91 9667764288
                  </a>
                  <a
                    target="_blank"
                    href="https://calendly.com/urban-vyapari/30min/?month=2024-02"
                    className="theme-btn btn-style-one"
                  >
                    <span className="btn-title">Schedule Meeting</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1 overlay-anim wow fadeInUp">
                  <img
                    src="/images/urban-vaypari-team.webp"
                    alt="urban Vypari team"
                  />
                </figure>
                <figure className="image-2 overlay-anim wow fadeInRight">
                  <img
                    src="/images/about-urban-vapari.webp"
                    alt="about Urban Vypari"
                  />
                </figure>
                <div className="experience bounce-y">
                  <div className="inner">
                    <i className="icon flaticon-discuss" />
                    <div className="text">
                      <strong>20+</strong> Years of <br />
                      experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Emd About Section */}
      {/* Team Section */}
      <section className="team-section pt-0">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Meet The Founding Team</h2>
          </div>
          <div className="row">
            {/* Team block */}
            <div
              className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="page-team-details.html">
                      <img src="/images/team/kuldeep.webp" alt="" />
                    </a>
                  </figure>
                  <div className="social-links">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  <span className="share-icon fa fa-plus" />
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <a href="page-team-details.html">Kuldeep Thakran</a>
                  </h4>
                  <span className="designation">Founder & CEO</span>
                </div>
              </div>
            </div>
            {/* Team block */}
            <div
              className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="page-team-details.html">
                      <img
                        src="/images/team/sudeep-dhosh.webp"
                        alt="Subhadeep Ghosh"
                      />
                    </a>
                  </figure>
                  <div className="social-links">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  <span className="share-icon fa fa-plus" />
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <a href="page-team-details.html">Subhadeep Ghosh</a>
                  </h4>
                  <span className="designation">Co-Founder & CBO</span>
                </div>
              </div>
            </div>
            {/* Team block */}
            <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="page-team-details.html">
                      <img src="/images/team/ritu-raj.webp" alt="Ritu Raj" />
                    </a>
                  </figure>
                  <div className="social-links">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  <span className="share-icon fa fa-plus" />
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <a href="page-team-details.html">Rituraj</a>
                  </h4>
                  <span className="designation">Co-Founder & CTO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}

      {/*End News Section */}
      {/* Contact Info Section */}
      <Enquire />
      {/* End Contact Info Section */}
      {/* Clients Section   */}
      <Clients />
      {/*End Clients Section */}
      <Footer />
    </div>
  );
}

export default About;
