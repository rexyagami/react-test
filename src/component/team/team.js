import "./team.css";

function Team() {
  return (
    <div className="container-md">
      <div className="row team-section">
        <div className="col-md-6 my-auto pr-md-5">
          <h2 className="hero-title secondary-title">
            Meet <span>My</span> Team
          </h2>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
            similique cupiditate! Quaerat velit deleniti veniam, ratione at,
            error, fugiat commodi maiores pariatur optio dignissimos consequatur
            dolor aliquid id perspiciatis nobis aspernatur repellat ad rem
            assumenda. Libero, tempora quod eos similique culpa, laudantium
            architecto, incidunt quae quia distinctio maiores in sunt?
          </p>

          <p className="team-title">Developer | Designer | Writer</p>
          <a
            name=""
            id=""
            class="btn btn-primary btn-hero"
            href="/"
            role="button"
          >
            Meet Team
          </a>
        </div>
        <div className="col-md-6 team_proc_section">
          <img className="team_proc_img" src="team_svg.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Team;
