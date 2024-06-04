const baseurl = process.env.url;
export default function Enquire() {
  return (
    <section className="contact-info-section pt-0">
      <div className="auto-container">
        <div className="row">
          {/* Contact Info Two */}
          <div className="contact-info-block-two col-lg-6 col-md-12">
            <div className="inner-box">
              <div className="bg" />
              <h3 className="title">
                Solution for large &amp; <br /> small businesses
              </h3>
              <a
                target="_blank"
                href="https://calendly.com/urban-vyapari/30min/?month=2024-02"
                className="theme-btn btn-style-one light"
              >
                <span className="btn-title">Setup Free Demo</span>
              </a>
            </div>
          </div>
          {/* Contact Info THree */}
          <div className="contact-info-block-three col-lg-6 col-md-12">
            <div className="inner-box">
              <div
                className="bg"
                style={{
                  backgroundImage: "url(./images/resource/info-bg.jpg)",
                }}
              />
              <h3 className="title">
                Need quick help? <br />
                call now
              </h3>
              <h3 className="num">
                <a href="#">+91 9667764288</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
