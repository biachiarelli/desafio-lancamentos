import React from "react";
import DateFormat from "../DateFormat/DateFormat";
import MaxLength from "../MaxLength/MaxLenght";
import Loading from "../Loading";

class LaunchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isLoaded: false,
      name: "",
      details: "",
      date_local: "",
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
            name: data.name,
            details: data.details,
            date_local: data.date_local,
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

  render() {
    const { error, isLoaded, name, details, date_local } = this.state;
    const MAX_LENGTH = 100;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />
    } else {
      return (
        <div className="LaunchData">
          <h1 className="LaunchData-title">{this.props.title}</h1>
          <div className="LaunchData-dataGroup">
            {name && (
              <div className="LaunchData-data">
                <span className="LaunchData-data__bold">Nome: </span>
                {name}
              </div>
            )}
            {date_local && (
              <div className="LaunchData-data">
                <span className="LaunchData-data__bold">Data: </span>
                <DateFormat date={date_local} />
              </div>
            )}
            {details && (
              <div className="LaunchData-data">
                <span className="LaunchData-data__bold">Detalhes: </span>
                <MaxLength text={details} length={MAX_LENGTH} />
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}
export default LaunchData;
