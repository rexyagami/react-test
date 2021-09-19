import "./hero.css";

function Hero() {
  return (
    <div className="container-md">
      <div className="row hero-section">
        <div className="col-md-6">
          <h2 className="hero-title">
            Design<span>er</span>
          </h2>
          <p className="hero-desc">Study | Design | Development</p>
          <a
            name=""
            id=""
            class="btn btn-primary btn-hero"
            href="/"
            role="button"
          >
            Contact
          </a>

          <div className="row logo-row">
            <div className="col-12">
              <p className="text-muted">Worked For:</p>
              <img
                src="http://landrick.react.themesbrand.com/static/media/amazon.b99a7cc4.svg"
                alt=""
                className="logo-company"
              />
              <img
                src="http://landrick.react.themesbrand.com/static/media/google.fc295ce9.svg"
                alt=""
                className="logo-company"
              />
              <img
                src="http://landrick.react.themesbrand.com/static/media/lenovo.b0f22f8b.svg"
                alt=""
                className="logo-company"
              />
            </div>
          </div>
        </div>
        <div className="img-div">
          <img className="hero-img" src="hero-svg.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
