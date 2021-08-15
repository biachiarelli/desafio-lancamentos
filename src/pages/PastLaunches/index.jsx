import Card from "../../components/Card/Card";
import LaunchTable from "../../components/LaunchTable";
import Navbar from "../../components/Navbar";
import TitlePage from "../../components/TitlePage";

function PastLaunches() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="PastLaunches">
          <div className="container">
            <TitlePage subtitle="Lista de últimos lançamentos" />
            <Card>
              <LaunchTable apiURL="https://api.spacexdata.com/v4/launches/past" />
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PastLaunches;
