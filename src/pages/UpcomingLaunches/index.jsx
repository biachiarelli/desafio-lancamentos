import Card from "../../components/Card/Card";
import LaunchTable from "../../components/LaunchTable";
import Navbar from "../../components/Navbar";
import TitlePage from "../../components/TitlePage";

function UpcomingLaunches() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="PastLaunches">
          <div className="container">
            <TitlePage subtitle="Lista de próximos lançamentos" />

            <Card>
              <LaunchTable apiURL="https://api.spacexdata.com/v4/launches/upcoming" />
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UpcomingLaunches;
