import './App.css';
import Header2 from "./components/header2/header2";
import Footer from "./components/footer/footer";
import Clients from "./components/clients/clients";
import Enquire from "./components/enquire/enquire";

// async function getdata() {
//   const res = await fetch(`${baseurl}/api/frontendapi/blogs`, {
//     cache: "no-store",
//   });
//   if (!res.ok) return notFound();
//   return res.json();
// }

function App() {
  // const data = getdata();
  return (
    <>
      <Header2 />

      {/* Banner Section */}
      <section className="banner-section-two">
        <div className="banner-carousel owl-carousel owl-theme">
          {/* Slide Item */}
          <div className="slide-item">
            <div
              className="bg-image"
              style={{
                 backgroundImage: "url(images/main-slider/IMG_20231014_140338.webp)",
              }}
            />
            <div className="auto-container">
              <div className="row">
                <div className="content-column col-lg-6 col-md-12">
                  <div className="content-box">
                    <span className="arrow-icon">
                      <img src="images/main-slider/arrow.png" alt="" />
                    </span>
                    <h1 className="title animate-1">
                      We <br />
                      Power Your Business
                    </h1>
                    <div className="btn-box animate-3">
                      <a href="#" className="theme-btn btn-style-one">
                        <span className="btn-title">Explore Now</span>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=R9Lcd62FgVg"
                        className="play-btn lightbox-image"
                      >
                        <i className="icon fa fa-play" /> Work <br />
                        Showcase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="banner-social-links">
          <li>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100090189225268" rel="noreferrer">
              facebook
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/uvhubs" rel="noreferrer">
              twitter
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/uvhubs/" rel="noreferrer">
              instagram
            </a>
          </li>
        </ul>
      </section>
      {/* End Banner Section */}

      {/* Services Section Three */}
      <section className="services-section-three">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Each Uniquely Designed To Enhance The Experience</h2>
          </div>
          <div className="row">
            {/* Service Block-three */}
            <div className="service-block-three col-lg-4 col-md-4 col-sm-4 wow fadeInUp">
              <div className="inner-box">
                <div className="content">
                  <div className="icon-box">
                    <img alt="UV Resto" src="/images/products/uv-resto.webp" />
                  </div>
                  <h5 className="title">
                    <a href="/uv-resto">UV Resto</a>
                  </h5>
                  <div className="text">
                    UV Resto, part of our advanced POS solutions, uses AI to
                    simplify restaurant operations. It manages everything from
                    inventory, billing, table management, to supplier
                    interactions.
                  </div>
                </div>
                <a href="/uv-resto" className="read-more">
                  <i className="fa fa-long-arrow-alt-right" />
                </a>
              </div>
            </div>
            {/* Service Block-three */}
            <div className="service-block-three col-lg-4 col-md-4 col-sm-4 wow fadeInUp">
              <div className="inner-box">
                <div className="content">
                  <div className="icon-box">
                    <img alt="UV Shop" src="/images/products/uv-shop.webp" />
                  </div>
                  <h5 className="title">
                    <a href="/uv-shop">UV Shop</a>
                  </h5>
                  <div className="text">
                    UV Shop harnesses the power of AI to revolutionise retail
                    operations. Streamline billing, inventory, supplier
                    management, and more in one easy-to-use interface.
                  </div>
                </div>
                <a href="/uv-shop" className="read-more">
                  <i className="fa fa-long-arrow-alt-right" />
                </a>
              </div>
            </div>
            {/* Service Block-three */}
            <div className="service-block-three col-lg-4 col-md-4 col-sm-4 wow fadeInUp">
              <div className="inner-box">
                <div className="content">
                  <div className="icon-box">
                    <img alt="UV Blaze" src="/images/products/uv-pay.webp" />
                  </div>
                  <h5 className="title">
                    <a href="/uv-pay">UV Pay</a>
                  </h5>
                  <div className="text">
                    UV Pay is part of Urban Vyapari's offerings, which include a
                    variety of payment solutions tailored for merchants.
                  </div>
                </div>
                <a href="/uv-pay" className="read-more">
                  <i className="fa fa-long-arrow-alt-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section*/}
      {/* About Section Four */}
      <section className="about-section-four pt-0">
        <div className="auto-container">
          <div className="row">
            <div
              className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Revolutionizing Retail Commerce</h2>
                  <div className="text">
                    A trailblazing startup that is revolutionizing the way small
                    and medium enterprises (SMEs) operate in urban landscapes.
                    We are immensely proud to announce our unique position as a
                    government-funded and Google-backed initiative, dedicated to
                    empowering urban businesses with cutting-edge technology and
                    unparalleled resources.
                  </div>
                </div>
                <h5 className="title">
                  Gateway To Effortless POS & Digital Marketing Solution
                </h5>
                <a
                  href="tel:+919667764288
"
                  className="info-btn"
                >
                  {" "}
                  <i className="icon flaticon-phone-ringing" />{" "}
                  <small>Give us a call to fix demo</small> +91 9667764288
                </a>
                <a href="/about" className="theme-btn btn-style-one">
                  <span className="btn-title">Explore now</span>
                </a>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="image-box">
                  <span className="bg-shape" />
                  <figure className="image-1 overlay-anim wow fadeInUp">
                    <img
                      src="/images/google-startup.webp"
                      alt="UV POS Machine"
                    />
                  </figure>
                  <figure className="image-2 overlay-anim wow fadeInRight">
                    <img src="/images/ginserv-2.webp" alt="UV POS" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Emd About Section Two */}
      {/* Features Section Four */}
      <section className="features-section-four p-0">
        <div className="auto-container">
          <div className="row g-0">
            {/* Feature Block Five*/}
            <div className="feature-block-five col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="inner-box">
                <div className="content">
                  <span className="count">01</span>
                  <h5 className="title">POS Services</h5>
                  <div className="text">
                    Integrate your store with a leading POS system, offering
                    real-time inventory management, Omni-channel sales
                    integration, and comprehensive analytics for unified
                    business operations.
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Block Five*/}
            <div className="feature-block-five col-lg-6 col-md-12 col-sm-12 wow fadeInRight">
              <div className="inner-box">
                <div className="content">
                  <span className="count">02</span>
                  <h5 className="title">Webshop</h5>
                  <div className="text">
                    Experience seamless online shopping experience with our User
                    friendly interface. A streamlined checkout process with
                    multiple payment options, including credit/debit cards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section Four */}
      {/* Projects section*/}
      <section className="projects-section style-two pull-up">
        <div className="bg bg-pattern-4" />
        <div className="auto-container">
          <div className="sec-title">
            <h2>Our Solutions </h2>
          </div>
          <div className="carousel-outer">
            <div className="projects-carousel-two owl-carousel owl-theme">
              {/* Training Block*/}
              <div className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="/uv-billbox">
                        <img
                          alt="UV Billbox"
                          src="images/products/uv-bilbox-product.webp"
                        />
                      </a>
                    </figure>
                    <div className="info-box">
                      <a href="/uv-billbox" className="read-more">
                        <i className="fa fa-long-arrow-alt-right" />
                      </a>
                      <span className="cat">POS Solution</span>
                      <h6 className="title">
                        <a href="/uv-billbox">UV Billbox</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* Training Block*/}
              <div className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="/uv-classic">
                        <img
                          alt="UV Classic"
                          src="/images/products/uv-classic-product.webp"
                        />
                      </a>
                    </figure>
                    <div className="info-box">
                      <a href="/uv-classic" className="read-more">
                        <i className="fa fa-long-arrow-alt-right" />
                      </a>
                      <span className="cat">POS Solution</span>
                      <h6 className="title">
                        <a href="/uv-classic">UV Classic</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* Training Block*/}
              <div className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="/uv-blaze">
                        <img
                          alt="UV Blaze"
                          src="/images/products/ub-blaze-product.webp"
                        />
                      </a>
                    </figure>
                    <div className="info-box">
                      <a href="/uv-blaze" className="read-more">
                        <i className="fa fa-long-arrow-alt-right" />
                      </a>
                      <span className="cat">POS Solution</span>
                      <h6 className="title">
                        <a href="/uv-blaze">UV Blaze</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* Training Block*/}
              <div className="project-block">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href="/uv-elevate">
                        <img
                          alt="UV Elevate"
                          src="/images/products/uv-Elevate-product.webp"
                        />
                      </a>
                    </figure>
                    <div className="info-box">
                      <a href="/uv-elevate" className="read-more">
                        <i className="fa fa-long-arrow-alt-right" />
                      </a>
                      <span className="cat">POS Solution</span>
                      <h6 className="title">
                        <a href="/uv-elevate">UV Elevate</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Projects Section */}
      {/* Why Choose Us Two */}
      <section className="why-choose-us-two pt-0">
        <div className="auto-container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-6">
                <h2>Why Urban Vyapari?</h2>
              </div>
              <div className="col-lg-6 d-flex justify-content-end">
                <div className="text">
                  Urban Vyapari is the one stop-solution for businesses that
                  provides streamline transactions, inventory management and
                  much more.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                {/* Feature Block Six */}
                <div className="feature-block-six">
                  <div className="inner-box">
                    <span className="icon">
                      <i className="flaticon-user-interface" />
                    </span>
                    <h5 className="title">Best user interfaces</h5>
                    <div className="text">
                      Where interaction becomes experience, pushing the
                      boundaries.
                    </div>
                  </div>
                </div>
                {/* Feature Block Six */}
                <div className="feature-block-six">
                  <div className="inner-box">
                    <span className="icon">
                      <i className="flaticon-front-end" />
                    </span>
                    <h5 className="title">Streamline your process</h5>
                    <div className="text">
                      Accelerate your progress with Urban Vyapari
                    </div>
                  </div>
                </div>
                {/* Feature Block Six */}
                <div className="feature-block-six">
                  <div className="inner-box">
                    <span className="icon">
                      <i className="flaticon-design" />
                    </span>
                    <h5 className="title">User friendly</h5>
                    <div className="text">
                      Bridging the gap between user and technology.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="image-box">
                  <figure className="image-1 overlay-anim wow fadeInUp">
                    <img
                      src="/images/main-slider/uv-pos-print.webp"
                      alt="UV POS Print"
                    />
                  </figure>
                  <figure className="image-2 overlay-anim wow fadeInRight">
                    <img
                      src="/images/main-slider/pos-uv-product.webp"
                      alt="UV POS Machine"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Emd Why Choose Us */}
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
      {/* Work Section Two */}
      <section className="work-section-two">
        <div className="row g-0">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="bg bg-pattern-16" />
            <div className="inner-column">
              <div className="sec-title light">
                <h2>Customized Solutions For Your Industry</h2>
                <div className="other-text">
                  Urban Vyapari is a leading innovator in retail technology, and
                  we're proud to be a part of their success
                </div>
                <div className="text">
                  We're revolutionising retail in India with AI-powered
                  solutions. Our suite includes UV Projects for infrastructure,
                  UV POS for advanced Point of Sale, and UV Digital for
                  data-driven marketing. With flagship products like UV Elevate
                  and UV Blaze, we streamline operations and boost revenue.
                </div>
              </div>
              <div className="row">
                {/* Work Block Two */}
                <div className="work-block-two col-lg-6 col-md-6">
                  <div className="inner-box">
                    <i className="icon flaticon-repair" />
                    <h5 className="title">24X7 Supports</h5>
                  </div>
                </div>
                {/* Work Block Two */}
                <div className="work-block-two col-lg-6 col-md-6">
                  <div className="inner-box">
                    <i className="icon flaticon-search-engine" />
                    <h5 className="title">On Demand Solutions </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <figure className="image">
              <img src="/images/main-slider/pos-machine-banner.webp" alt="" />
            </figure>
          </div>
        </div>
      </section>
      {/* End Features Section */}

      {/* Testimonial Section Three */}
      <section className="testimonial-section-three">
        <div className="container-fluid p-0">
          <div className="outer-box">
            <div className="carousel-outer">
              <div className="testimonial-carousel-three owl-carousel owl-theme default-dots">
                {/* Testimonial Block Three */}
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="thumb">
                      <img src="https://via.placeholder.com/78x79" alt="" />
                      <span className="icon fa fa-quote-right" />
                    </div>
                    <div className="text">
                      "I can't say enough good things about the UV Blaze that
                      we've implemented in our establishment. It has truly
                      revolutionized the way we manage our day-to-day operations
                      and has become an indispensable tool for our success."
                    </div>
                    <h6 className="name">
                      Sippin Cafe, Greater Kailash
                      <span className="designation"> - &nbsp; Owner</span>
                    </h6>
                  </div>
                </div>
                {/* Testimonial Block Three */}
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="thumb">
                      <img src="https://via.placeholder.com/78x79" alt="" />
                      <span className="icon fa fa-quote-right" />
                    </div>
                    <div className="text">
                      "My experience with the UV Blaze that we've integrated
                      into our dining establishment. This has truly been a
                      game-changer in how we handle our seating arrangements and
                      provide an exceptional experience to our patrons."
                    </div>
                    <h6 className="name">
                      Tap House Cafe & Bar, Gurugram
                      <span className="designation"> - &nbsp; Owner</span>
                    </h6>
                  </div>
                </div>
                {/* Testimonial Block Three */}
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="thumb">
                      <img src="/images/ranisa.webp" alt="Ranisa" />
                      <span className="icon fa fa-quote-right" />
                    </div>
                    <div className="text">
                      "I am thrilled to share my experience with the UV Resto.
                      As a restaurant owner, managing billing and transactions
                      used to be a daunting task. However, since implementing
                      this software into our operations, everything has become
                      incredibly streamlined and efficient."
                    </div>
                    <h6 className="name">
                      Ranisa, Gurugram
                      <span className="designation"> - &nbsp; Owner</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-box">
              <div
                className="inner-box"
                style={{
                  backgroundImage: "url(./images/resource/banner-1.jpg)",
                }}
              >
                <h3>
                  Urban Vyapari is the one stop-solution for businesses that
                  provides streamline transactions, inventory management and
                  much more.
                </h3>
                <a
                  href="page-about.html"
                  className="theme-btn btn-style-one light"
                >
                  <span className="btn-title">Explore now</span>
                </a>
              </div>
            </div>
            <div className="fact-counter-two">
              <div className="row">
                {/* Counter block*/}
                <div className="counter-block-two col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                  <div className="inner">
                    <i className="icon flaticon-campaign" />
                    <div className="count-box">
                      <span
                        className="count-text"
                        data-speed={3000}
                        data-stop={300}
                      >
                        0
                      </span>{" "}
                      +
                    </div>
                    <h6 className="counter-title">
                      UV Shop <br />
                      Active Users
                    </h6>
                  </div>
                </div>
                {/*Counter block*/}
                <div
                  className="counter-block-two col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="inner">
                    <i className="icon flaticon-social-campaign" />
                    <div className="count-box">
                      <span
                        className="count-text"
                        data-speed={3000}
                        data-stop={30}
                      >
                        0
                      </span>
                      +
                    </div>
                    <h6 className="counter-title">
                      UV Resto <br />
                      Active Users
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial Section Three */}

      {/* News Section */}
      {/* <section className="news-section">
        <div className="bg bg-pattern-19" />
        <div className="auto-container">
          <div className="sec-title text-center light">
            <span className="sub-title">News &amp; Articles</span>
            <h2>From the latest news and blog</h2>
          </div>
          <div className="row">
            {data.slice(0, 3).map((blog) => (
              <div
                className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                key={blog._id}
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <a href={`${baseurl}/blogdetail/${blog.seoSlugname}`}>
                        <img
                          src={blog.image.url}
                          alt={blog.title}
                          style={{ height: "300px", width: "400px" }}
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="content-box">
                    <span className="date">{blog.createdAt.slice(0, 10)}</span>
                    <span className="post-info">
                      <i className="fa fa-user-circle" />
                      {blog.authorname}
                    </span>
                    <h5 className="title">
                      <a href={`${baseurl}/blogdetail/${blog.seoSlugname}`}>
                        {blog.title}
                      </a>
                    </h5>
                    <div className="text">{blog.shortSummary}</div>
                    <a
                      href={`${baseurl}/blogdetail/${blog.seoSlugname}`}
                      className="read-more"
                    >
                      <i className="fa fa-long-arrow-alt-right" /> Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */} 
      {/*End News Section */}

      {/* Contact Info Section */}
      <Enquire />
      {/* End Contact Info Section */}
      {/* Clients Section   */}
      <Clients />
      {/*End Clients Section */}
      <Footer />
    </>
  );
}

export default App;
