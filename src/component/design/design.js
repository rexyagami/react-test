import "./design.css";

function Design() {
  return (
    <div className="container-md">
      <div className="row design-section">
        <div className="col-md-6 design_proc_section">
          <img className="design_proc_img" src="design_proc.svg" alt="" />
        </div>
        <div className="col-md-6 pl-md-5 my-auto">
          <h2 className="hero-title secondary-title">
            Design <span>Process</span>
          </h2>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
            similique cupiditate! Quaerat velit deleniti veniam, ratione at,
            error, fugiat commodi maiores pariatur optio dignissimos consequatur
            dolor aliquid id perspiciatis nobis aspernatur repellat ad rem
            assumenda. Libero, tempora quod eos similique culpa, laudantium
            architecto, incidunt quae quia distinctio maiores in sunt?
          </p>
          <a
            name=""
            id=""
            class="btn btn-primary btn-hero"
            href="/"
            role="button"
          >
            More About
          </a>
        </div>
      </div>
    </div>
  );
}

export default Design;
