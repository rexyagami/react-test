import "./service.css";

function Service() {
  return (
    <div className="container-fluid service-container">
      <div className="container-md">
        <div className="row service-section">
          <div className="col-md-12 mb-5">
            <h2 className="hero-title secondary-title service-title">
              <span>Our</span> Services
            </h2>
            <p className="service-para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              quidem!
            </p>
          </div>
          <div className="col-md-6 pr-md-5 my-auto">
            <img className="w-100" src="services.svg" alt="" />
          </div>
          <div className="col-md-6 service_proc_section">
            <div className="row">
              <div className="col-sm-6">
                <div className="service-card">
                  <img src="design.svg" alt="" />
                  <h3>Designers</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="service-card">
                  <img src="design.svg" alt="" />
                  <h3>Designers</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="service-card">
                  <img src="design.svg" alt="" />
                  <h3>Designers</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="service-card">
                  <img src="design.svg" alt="" />
                  <h3>Designers</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
