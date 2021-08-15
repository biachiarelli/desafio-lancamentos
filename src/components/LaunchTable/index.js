import React from "react";
import { Redirect } from "react-router-dom";
import DateFormat from "../DateFormat/DateFormat";
import Loading from "../Loading";

class LaunchTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isLoaded: false,
      redirect: false,
      data: [],
      sendData: [],
    };
  }
  componentDidMount() {
    const apiUrl = this.props.apiURL;
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            data: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  handleClick = (data) => {
    this.setState({
      redirect: true,
      sendData: data,
    });
  };

  render() {
    const { error, isLoaded, data } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      if (this.state.redirect) {
        console.log(this.state.data.id);
        return (
          <Redirect
            to={{
              pathname: `/lancamento`,
              state: { data: this.state.sendData },
            }}
          />
        );
      } else {
        return (
          <div className="LaunchTable">
            <table className="LaunchTable-table">
              <tr>
                <th className="LaunchTable-table__header">Nome</th>
                <th className="LaunchTable-table__header">Data</th>
                <th className="LaunchTable-table__header">Detalhes</th>
                <th className="LaunchTable-table__header">Falhas</th>
                <th className="LaunchTable-table__header">Vídeo</th>
                <th className="LaunchTable-table__header">Artigo</th>
                <th className="LaunchTable-table__header">Wikipédia</th>
              </tr>
              {data.map((data) => (
                <tr>
                  <td className="LaunchTable-table__data">{data.name}</td>
                  <td className="LaunchTable-table__data">
                    <DateFormat date={data.date_local} />
                  </td>
                  <td className="LaunchTable-table__data">{data.details}</td>
                  <td className="LaunchTable-table__data">
                    {data.failures.length}
                  </td>
                  <td className="LaunchTable-table__data">
                    <a
                      className="LaunchTable-table__button"
                      target="_blank"
                      without
                      rel="noreferrer"
                      href={data.links.webcast}
                    >
                      Link
                    </a>
                  </td>
                  <td className="LaunchTable-table__data">
                    <a
                      className="LaunchTable-table__button"
                      target="_blank"
                      without
                      rel="noreferrer"
                      href={data.links.article}
                    >
                      Link
                    </a>
                  </td>
                  <td className="LaunchTable-table__data">
                    <a
                      className="LaunchTable-table__button"
                      target="_blank"
                      without
                      rel="noreferrer"
                      href={data.links.wikipedia}
                    >
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        );
      }
    }
  }
}
export default LaunchTable;
