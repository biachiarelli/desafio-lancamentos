import LaunchData from "../../components/LaunchData";
import image from "../../assets/img/foguete.png";
import TitlePage from "../../components/TitlePage";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <div>
      <header>
        <TitlePage title="Lançamentos" />
      </header>
      <main>
        <section className="Home">
          <div className="container">
            <div className="Home-grid">
              <div className="Home-col">
                <Card>
                  <LaunchData
                    title="Último Lançamento"
                    apiURL="https://api.spacexdata.com/v4/launches/latest"
                  />
                </Card>
              </div>
              <div className="Home-col">
                <Card>
                  <LaunchData
                    title="Próximo Lançamento"
                    apiURL="https://api.spacexdata.com/v4/launches/next"
                  />
                </Card>
              </div>
              <div className="Home-col">
                <Button to="/ultimos-lancamentos">
                  Lista de últimos lançamentos
                </Button>
              </div>
              <div className="Home-col">
                <Button to="/proximos-lancamentos">
                  Lista de próximos lançamentos
                </Button>
              </div>
            </div>
            <div className="Home-image">
              <img src={image} alt="Ilustração de fogete" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
