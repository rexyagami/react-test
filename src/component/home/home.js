import Design from "../design/design";
import Hero from "../hero/hero";
import Service from "../service/service";
import Team from "../team/team";

function Home() {
  return (
    <div>
      <Hero />
      <Design />
      <Team />
      <Service />
    </div>
  );
}

export default Home;
