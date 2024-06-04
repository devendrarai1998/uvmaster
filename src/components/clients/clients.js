export default function Clients() {
    return (
      <section className="clients-section style-two">
        <div className="auto-container">
          {/* Sponsors Outer */}
          <div className="sponsors-outer">
            {/*clients carousel*/}
            <ul className="clients-carousel owl-carousel owl-theme">
              <li className="slide-item">
                {" "}
                <a href="#">
                  <img src="images/partners/google.webp" alt="Google" />
                </a>{" "}
              </li>
              <li className="slide-item">
                {" "}
                <a href="#">
                  <img src="images/partners/aws.webp" alt="AWS" />
                </a>{" "}
              </li>
              <li className="slide-item">
                {" "}
                <a href="#">
                  <img src="images/partners/hdfc.webp" alt="HDFC" />
                </a>{" "}
              </li>
              <li className="slide-item">
                {" "}
                <a href="#">
                  <img src="images/partners/axis.webp" alt="AXIS" />
                </a>{" "}
              </li>
              <li className="slide-item">
                {" "}
                <a href="#">
                  <img src="images/partners/dbs.webp" alt="DBS" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  